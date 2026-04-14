import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ContactResponse } from '@/types/contact';
import { getEmailHtmlTemplate, getEmailTextTemplate, getAutoReplyTemplate, isSpam } from '@/lib/email';

const CONFIG = {
    YOUR_EMAIL: 'sahosmia.webdev@gmail.com', 

    // আপনি Resend, Nodemailer, বা EmailJS ব্যবহার করতে পারেন
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

// ইমেইল সেন্ড করার ফাংশন (Resend API ব্যবহার করে)
async function sendEmailWithResend(data: ContactFormData): Promise<boolean> {
    try {
        // Resend API ব্যবহার করতে চাইলে:
        // 1. `npm install resend`
        // 2. Resend থেকে API key নিন
        // 3. নিচের কোড আনকমেন্ট করুন

        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        // আপনার ইমেইলে নোটিফিকেশন
        await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: CONFIG.YOUR_EMAIL,
          subject: `New Contact: ${data.subject}`,
          html: getEmailHtmlTemplate(data),
          text: getEmailTextTemplate(data),
        });
        
        // অটো রিপ্লাই (ব্যবহারকারীকে)
        await resend.emails.send({
          from: 'Sahos Mia <onboarding@resend.dev>',
          to: data.email,
          subject: 'Thank you for contacting me!',
          html: getAutoReplyTemplate(data.name),
        });
        */

        console.log('📧 Email would be sent to:', CONFIG.YOUR_EMAIL);
        console.log('📧 Auto-reply would be sent to:', data.email);

        return true;
    } catch (error) {
        console.error('Email sending failed:', error);
        return false;
    }
}

async function sendEmailWithEmailJS(data: ContactFormData): Promise<boolean> {
    try {
        // EmailJS ব্যবহার করতে চাইলে:
        // 1. EmailJS এ অ্যাকাউন্ট তৈরি করুন
        // 2. Service ID, Template ID, Public Key নিন
        // 3. নিচের কোড আনকমেন্ট করুন

        /*
        const emailjs = require('@emailjs/nodejs');
        
        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_email: CONFIG.YOUR_EMAIL,
          },
          {
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            privateKey: process.env.EMAILJS_PRIVATE_KEY,
          }
        );
        */

        console.log('📧 EmailJS would send email');
        return true;
    } catch (error) {
        console.error('EmailJS failed:', error);
        return false;
    }
}

async function saveToDatabase(data: ContactFormData, ip: string): Promise<boolean> {
    try {     

        console.log('💾 Would save to database:', { ...data, ip });
        return true;
    } catch (error) {
        console.error('Database save failed:', error);
        return false;
    }
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
            const emailSent2 = await sendEmailWithEmailJS(body);
            if (!emailSent2) {
                return NextResponse.json(
                    { success: false, message: 'Failed to send message. Please try again later.' },
                    { status: 500 }
                );
            }
        }

        await saveToDatabase(body, ip);

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