import { targets } from "@/constants";
import TargetItem from "./TargetItem";

function Target() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-50">
      <div className="container flex flex-col md:flex-row gap-3">
        {targets.map((item, i) => (
          <TargetItem key={i} item={item}></TargetItem>
        ))}
      </div>
    </section>
  );
}

export default Target;
