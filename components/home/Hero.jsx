import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-center bg-no-repeat bg-cover text-light pt-40 lg:pt-56 pb-24 md:pb-32">
      <div className="container max-md:text-center">
        <h4 className="text-2xl/relaxed md:text-4xl/relaxed font-medium text-main">
          Hello, I am
        </h4>
        <h1 className="text-4xl/relaxed md:text-7xl/relaxed font-bold pb-4">
          Sahos Ridoy
        </h1>
        <p className="w-full max-w-xl text-slate-400 text-lg md:text-xl max-md:m-auto">
          I am creative designer based in New York, and I am very passionate and
          dedicated to my work.
        </p>
        <div className="my-10 flex gap-3 max-md:justify-center">
          <Link
            href="/portfolios"
            className=" text-light bg-main inline-block w-28 text-center py-3 hover:bg-transparent outline outline-1 outline-main transition ease-in-out duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="text-light bg-transparent outline outline-1 outline-main inline-block w-28 text-center py-3 hover:bg-main transition ease-in-out duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
