// "use-client";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

const ContactForm = () => {
  let inputClass =
    "w-full lg  :w-1/2 py-2 md:py-4 px-2 md:px-3 text-sm md:text-base outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded";

  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       // ServiceId, templateId, PublicId get form emailjs
  //       "service_mgmv0dk", // serviceId
  //       "template_y6hsd9s", // templateId
  //       form.current,
  //       "ymg1a8iPcRXyiDkGd" //publicId
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         form.current.reset();
  //         alert("Email Sent Done! I will contact with you very soon");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <form  >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row justify-around w-full gap-5">
          <input
            type="text"
            name="first_name"
            placeholder="Your Name"
            className={inputClass}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-around w-full gap-5">
          <input
            type="text"
            name="user_phone"
            placeholder="Your Phone"
            className={inputClass}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            className={inputClass}
            required
          />
        </div>

        <div>
          <textarea
            rows="5"
            name="message"
            placeholder="Write Your Massage Here"
            className="w-full py-2 md:py-4 px-2 md:px-3 text-sm md:text-base outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded "
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="shadow bg-main btn text-light rounded-full px-10 md:px-14 py-2 md:py-4 w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
