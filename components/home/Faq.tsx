import { faqs } from "@/constants";
import FaqItem from "./FaqItem";
import SectionHead from "./SectionHead";

export interface Faq {
    question: string;
    answer: string;
}

const Faq = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container">
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
