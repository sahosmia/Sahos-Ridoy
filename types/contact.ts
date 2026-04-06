// types/contact.ts
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message: string;
    error?: string;
}

export interface EmailData {
    to: string;
    from: string;
    subject: string;
    html: string;
    text: string;
}