import ContactSocialItem from "./ContactSocialItem";
import { contacts } from "@/constants";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-16">
      {/* <div className="container text-center">
        <p className="sub-title">Feel free to contact me anytimes</p>
        <h3 className="section-heading">Get in Touch</h3>
      </div> */}

      <div className="container flex flex-col md:flex-row gap-10 py-10">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          {contacts.map((contact) => (
            <ContactSocialItem
              key={contact.title}
              contact={contact}
            ></ContactSocialItem>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
