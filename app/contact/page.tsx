import PageBannerTitle from '@/components/core/PageBannerTitle';
import Contact from '@/components/home/Contact'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Portfolios Page",
  description: "Sahos mia is a profetional web developer",
};

const ContactPage = () => {
    return (
        <>
            <PageBannerTitle
                title="All Posts"
                img="/images/portfolio/portfolio-background.jpg"
            />
        <Contact />
        </>
    )
}

export default ContactPage