import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-center bg-no-repeat bg-cover text-light pt-40 lg:pt-56 pb-24 md:pb-32">
      <div className="container max-md:text-center">
        <h4 className="text-xl/relaxed md:text-3xl/relaxed font-medium text-main">
          Hello, I am
        </h4>
        <h1 className="text-3xl/relaxed md:text-5xl/relaxed font-bold pb-4">
          Sahos Ridoy
        </h1>
        <p className="w-full sm:w-96 text-slate-400 text-base md:text-lg max-md:m-auto">
          I am creative designer based in New York, and I am very passionate and
          dedicated to my work.
        </p>
        <div className="my-10 flex gap-2 max-md:justify-center">
          <Link
            href="/portfolios"
            className="text-light bg-main px-5 py-2 hover:bg-transparent outline outline-1 outline-main transition ease-in-out duration-300"
          >
            Portfolio
          </Link>
          <a
            href="#about"
            className="text-light bg-transparent outline outline-1 outline-main px-5 py-2 hover:bg-main transition ease-in-out duration-300"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
