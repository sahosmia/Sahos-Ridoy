"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariant, viewportConfig, hoverScale } from "@/lib/motion";
import PageBannerTitle from "@/components/core/PageBannerTitle";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: "", email: "", subject: "", message: "" });
                setErrorMessage("");
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.message || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitStatus('error');
            setErrorMessage('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    // Contact Info Items
    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            value: "sahos@example.com",
            link: "mailto:sahos@example.com",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            value: "+880 1952-827301",
            link: "tel:+8801952827301",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Location",
            value: "Dhaka, Bangladesh",
            link: null,
        },
    ];

    return (
        <>
            <PageBannerTitle
                title="Contact US"
                subtitle="Project Details"
                img="/images/portfolio/portfolio-background.jpg"
            />

            <section className="section bg-surface overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute -top-40 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
                        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                        className="absolute -bottom-40 -left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left Column - Contact Form */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            className="space-y-6"
                        >
                            <motion.div variants={fadeUpVariant(0)}>
                                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                    Send Me a Message
                                </h2>
                                <p className="text-text-secondary">
                                    Have a project in mind? Let&apos;s discuss! Fill out the form and I&apos;ll get back to you soon.
                                </p>
                            </motion.div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <motion.div variants={fadeUpVariant(0.1)}>
                                    <label className="block text-text-primary text-sm font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-surface-muted border border-surface-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </motion.div>

                                {/* Email Field */}
                                <motion.div variants={fadeUpVariant(0.2)}>
                                    <label className="block text-text-primary text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-surface-muted border border-surface-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="hello@example.com"
                                    />
                                </motion.div>

                                {/* Subject Field */}
                                <motion.div variants={fadeUpVariant(0.3)}>
                                    <label className="block text-text-primary text-sm font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 rounded-xl bg-surface-muted border border-surface-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                                        placeholder="Project Inquiry"
                                    />
                                </motion.div>

                                {/* Message Field */}
                                <motion.div variants={fadeUpVariant(0.4)}>
                                    <label className="block text-text-primary text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-5 py-3 rounded-xl bg-surface-muted border border-surface-border text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div variants={fadeUpVariant(0.5)}>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        {...hoverScale}
                                        className="w-full py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </motion.button>
                                </motion.div>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 text-sm text-center"
                                    >
                                        ✓ Message sent successfully! I&apos;ll get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm text-center"
                                    >
                                        ✗ Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Right Column - Contact Info */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeUpVariant(0)}>
                                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                    Get in Touch
                                </h2>
                                <p className="text-text-secondary">
                                    I&apos;m always excited to connect with new people and discuss potential projects.
                                </p>
                            </motion.div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeUpVariant(0.1 + idx * 0.1)}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 p-5 rounded-2xl bg-surface-muted border border-surface-border hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-text-muted text-xs uppercase tracking-wider">
                                                {info.title}
                                            </h3>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-text-primary font-medium hover:text-primary transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-text-primary font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Working Hours */}
                            <motion.div
                                variants={fadeUpVariant(0.4)}
                                className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-purple/5 border border-primary/10"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="font-semibold text-text-primary">Response Time</h3>
                                </div>
                                <p className="text-text-secondary text-sm">
                                    I typically respond within 24 hours. For urgent inquiries, please reach out via phone or WhatsApp.
                                </p>
                            </motion.div>



                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;