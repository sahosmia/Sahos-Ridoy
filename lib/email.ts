// lib/email.ts
import { ContactFormData, EmailData } from "@/types/contact";

// ইমেইল টেমপ্লেট - HTML ভার্সন
export const getEmailHtmlTemplate = (data: ContactFormData): string => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
        }
        .card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #fe4e59 0%, #e33e48 100%);
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e0e0e0;
        }
        .field-label {
          font-weight: 600;
          color: #fe4e59;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
          margin: 0;
        }
        .message-content {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-top: 10px;
          white-space: pre-wrap;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        .badge {
          display: inline-block;
          background: #fe4e59;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <div class="badge">Portfolio Inquiry</div>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">👤 Name</div>
              <p class="field-value">${escapeHtml(data.name)}</p>
            </div>
            
            <div class="field">
              <div class="field-label">📧 Email</div>
              <p class="field-value">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #fe4e59; text-decoration: none;">
                  ${escapeHtml(data.email)}
                </a>
              </p>
            </div>
            
            <div class="field">
              <div class="field-label">📌 Subject</div>
              <p class="field-value">${escapeHtml(data.subject)}</p>
            </div>
            
            <div class="field">
              <div class="field-label">💬 Message</div>
              <div class="message-content">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${escapeHtml(data.name)}.</p>
            <p style="margin-top: 10px;">&copy; ${new Date().getFullYear()} Sahos Mia Portfolio</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// ইমেইল টেমপ্লেট - টেক্সট ভার্সন
export const getEmailTextTemplate = (data: ContactFormData): string => {
    return `
    NEW CONTACT FORM SUBMISSION
    ===========================
    
    Name: ${data.name}
    Email: ${data.email}
    Subject: ${data.subject}
    
    Message:
    ${data.message}
    
    ---
    This message was sent from your portfolio contact form.
    Reply directly to this email to respond to ${data.name}.
  `;
};

// অটো রিপ্লাই ইমেইল টেমপ্লেট (ব্যবহারকারীকে)
export const getAutoReplyTemplate = (name: string): string => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Contacting Me</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
        }
        .container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #fe4e59 0%, #e33e48 100%);
          padding: 30px 20px;
          text-align: center;
          border-radius: 16px 16px 0 0;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 24px;
        }
        .content {
          background: #ffffff;
          padding: 30px;
          border: 1px solid #e0e0e0;
          border-top: none;
          border-radius: 0 0 16px 16px;
        }
        .button {
          display: inline-block;
          background: #fe4e59;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✨ Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
          <p>Dear ${escapeHtml(name)},</p>
          <p>Thank you for contacting me. I've received your message and will get back to you within <strong>24 hours</strong>.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my portfolio for more projects</li>
            <li>Connect with me on LinkedIn or GitHub</li>
            <li>Schedule a quick call if urgent</li>
          </ul>
          <a href="https://sahosmia.com/portfolios" class="button">View Portfolio</a>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">
            Best regards,<br>
            <strong>Sahos Mia</strong><br>
            Full Stack Developer
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Helper: HTML escape
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// স্প্যাম চেক
export function isSpam(data: ContactFormData): boolean {
    const spamKeywords = ['casino', 'viagra', 'porn', 'sex', 'xxx', 'lottery', 'bitcoin', 'crypto investment'];
    const allText = `${data.name} ${data.email} ${data.subject} ${data.message}`.toLowerCase();

    for (const keyword of spamKeywords) {
        if (allText.includes(keyword)) {
            return true;
        }
    }

    // অতিরিক্ত স্প্যাম চেক
    if (data.message.length < 10) return true;
    if (data.message.split(' ').length < 3) return true;

    return false;
}