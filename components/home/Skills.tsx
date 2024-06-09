import Image from "next/image";
import FaqSide from "../../public/images/faq2.jpg";
import { skills } from "../../constants";

const Skills = () => {
  return (
    <div className="py-5 sm:py-16  relative">
      <div className="container flex flex-col lg:flex-row items-center gap-5  md:gap-20">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-4/5 flex m-auto"
            src={FaqSide}
            alt="Faq - Sahos"
            width="1000"
            height="1000"
          />
        </div>
        <div className="w-full lg:w-2/4 ">
          <div className="w-full lg:w-4/5">
            {skills.map((skill, i) => (
              <div key={i} className="w-full pb-5">
                <div className="flex justify-between">
                  <h5 className="font-medium">{skill.title}</h5>
                  <span className="font-medium">{skill.per}</span>
                </div>
                <div className="bg-gray-200   rounded">
                  <div className=" " style={{ width: `${skill.per}` }}>
                    <div
                      className={`bg-main py-1 w-full rounded skill-bar `}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
