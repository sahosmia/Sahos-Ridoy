import { services } from "../../constants";
import SectionHead from "./SectionHead";
import ServiceItem from "./ServiceItem";

function Service() {
  return (
    <section className="bg-light py-10 sm:py-16 " id="service">
      <SectionHead title="My Service" des="Service I offer to my clients" />

      <div className="container flex flex-col md:flex-row flex-wrap gap-5">
        {services.map((item) => (
          <ServiceItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Service;
