import { faqs } from "@/data/others";
import FaqItem from "./FaqItem";
import SectionHead from "./SectionHead";

export interface Faq {
    question: string;
    answer: string;
}

const Faq = () => {
    return (
        <section className="section bg-gray-50">
            <div className="container-custom">
                <SectionHead
                    des="faq"
                    title="Frequently Asked Questions"
                />

                <div className="mt-10 max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem faq={faq} key={faq.question} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
