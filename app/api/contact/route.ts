import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormData, ContactResponse } from '@/types/contact';
import { getEmailHtmlTemplate, getEmailTextTemplate, getAutoReplyTemplate, isSpam } from '@/lib/email';

const CONFIG = {
    YOUR_EMAIL: 'sahosmia.webdev@gmail.com', 

};

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; 
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return false;
    }

    record.count++;
    rateLimit.set(ip, record);
    return true;
}

async function sendEmailWithResend(data: ContactFormData): Promise<boolean> {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is not configured');
        return false;
    }

    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_EMAIL || CONFIG.YOUR_EMAIL;

    try {
        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to,
            replyTo: data.email,
            subject: `New Contact: ${data.subject}`,
            html: getEmailHtmlTemplate(data),
            text: getEmailTextTemplate(data),
        });

        if (error) {
            console.error('Resend error:', error);
            return false;
        }
    } catch (error) {
        console.error('Email sending failed:', error);
        return false;
    }

    // Auto-reply is best-effort: it can fail (e.g. unverified sending domain)
    // without the visitor's message being lost.
    try {
        await resend.emails.send({
            from: 'Sahos Mia <onboarding@resend.dev>',
            to: data.email,
            subject: 'Thank you for contacting me!',
            html: getAutoReplyTemplate(data.name),
        });
    } catch (error) {
        console.warn('Auto-reply failed:', error);
    }

    return true;
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
    try {
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        const body: ContactFormData = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        if (name.length < 2) {
            return NextResponse.json(
                { success: false, message: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        if (message.length < 10) {
            return NextResponse.json(
                { success: false, message: 'Message must be at least 10 characters' },
                { status: 400 }
            );
        }

        if (isSpam(body)) {
            console.warn(`🚫 Spam detected from IP: ${ip}`);
            return NextResponse.json(
                { success: false, message: 'Your message looks like spam. Please try again.' },
                { status: 400 }
            );
        }

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const emailSent = await sendEmailWithResend(body);

        if (!emailSent) {
            return NextResponse.json(
                { success: false, message: 'Failed to send message. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully! I will get back to you soon.',
        });

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'An unexpected error occurred. Please try again later.',
                error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Contact API is running',
        timestamp: new Date().toISOString(),
    });
}