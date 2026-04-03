import PageBannerTitle from '@/components/core/PageBannerTitle';
import Contact from '@/components/home/Contact'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Contact Me | Full Stack Developer",
  description: "Get in touch with Sahos Mia for web development projects and collaborations.",
};

const ContactPage = () => {
    return (
        <>
            <PageBannerTitle
                title="Contact Me"
                img="/images/portfolio/portfolio-background.jpg"
            />
        <Contact />
        </>
    )
}

export default ContactPage