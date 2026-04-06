// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ContactResponse } from '@/types/contact';
import { getEmailHtmlTemplate, getEmailTextTemplate, getAutoReplyTemplate, isSpam } from '@/lib/email';

// কনফিগারেশন - আপনার নিজের তথ্য দিন
const CONFIG = {
    // আপনার ইমেইল (যেখানে মেসেজ পাঠাবে)
    YOUR_EMAIL: 'sahos@example.com', // 🔴 CHANGE THIS

    // ইমেইল সেন্ড করার ফাংশন (নিচে ইম্প্লিমেন্ট করা হবে)
    // আপনি Resend, Nodemailer, বা EmailJS ব্যবহার করতে পারেন
};

// Rate limiting - প্রতি IP থেকে 5 মিনিটে সর্বোচ্চ 3 টি রিকোয়েস্ট
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
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

        // ডেমো: কনসোল লগ (প্রোডাকশনে রিমুভ করুন)
        console.log('📧 Email would be sent to:', CONFIG.YOUR_EMAIL);
        console.log('📧 Auto-reply would be sent to:', data.email);

        return true;
    } catch (error) {
        console.error('Email sending failed:', error);
        return false;
    }
}

// ইমেলজ ব্যবহার করে ইমেইল সেন্ড (সহজ বিকল্প)
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

// ডাটাবেসে সংরক্ষণ (অপশনাল)
async function saveToDatabase(data: ContactFormData, ip: string): Promise<boolean> {
    try {
        // Prisma বা MongoDB ব্যবহার করতে চাইলে:
        // await prisma.contact.create({ data: { ...data, ip } })

        console.log('💾 Would save to database:', { ...data, ip });
        return true;
    } catch (error) {
        console.error('Database save failed:', error);
        return false;
    }
}

// মেইন POST হ্যান্ডলার
export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
    try {
        // 1. IP অ্যাড্রেস পাওয়া
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        // 2. রিকোয়েস্ট বডি পার্স করা
        const body: ContactFormData = await request.json();
        const { name, email, subject, message } = body;

        // 3. ভ্যালিডেশন
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        // 4. ইমেইল ভ্যালিডেশন
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        // 5. নাম ভ্যালিডেশন (ন্যূনতম ২ অক্ষর)
        if (name.length < 2) {
            return NextResponse.json(
                { success: false, message: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        // 6. মেসেজ ভ্যালিডেশন (ন্যূনতম ১০ অক্ষর)
        if (message.length < 10) {
            return NextResponse.json(
                { success: false, message: 'Message must be at least 10 characters' },
                { status: 400 }
            );
        }

        // 7. স্প্যাম চেক
        if (isSpam(body)) {
            console.warn(`🚫 Spam detected from IP: ${ip}`);
            return NextResponse.json(
                { success: false, message: 'Your message looks like spam. Please try again.' },
                { status: 400 }
            );
        }

        // 8. রেট লিমিট চেক
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { success: false, message: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // 9. ইমেইল সেন্ড করুন
        const emailSent = await sendEmailWithResend(body);

        if (!emailSent) {
            // ইমেইল ফেইল হলে দ্বিতীয় পদ্ধতি চেষ্টা করুন
            const emailSent2 = await sendEmailWithEmailJS(body);
            if (!emailSent2) {
                return NextResponse.json(
                    { success: false, message: 'Failed to send message. Please try again later.' },
                    { status: 500 }
                );
            }
        }

        // 10. ডাটাবেসে সংরক্ষণ (অপশনাল)
        await saveToDatabase(body, ip);

        // 11. সাকসেস রেসপন্স
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

// GET হ্যান্ডলার (অপশনাল - শুধু API স্ট্যাটাস চেকের জন্য)
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Contact API is running',
        timestamp: new Date().toISOString(),
    });
}