export default function ServiceItem({ item }) {
  const { icon, title, description } = item;
  return (
    <div className="transition delay-150 after:transition-all after:duration-700 duration-700 ease-in-out flex-shrink-1 flex-grow basis-1/3 lg:basis-[30%] p-5 md:p-10 bg-slate-800 rounded text-center relative after:absolute hover:after:w-full after:w-0 after:h-1 after:bg-main after:bottom-0 after:left-0 after:-z-10 z-10 overflow-hidden  shadow">
      <span className="text-main  bg-light bg-opacity-20 text-3xl md:text-4xl lg:text-5xl w-16 md:w-20 h-16 md:h-20 rounded-full flex justify-center items-center m-auto mb-8">
        {icon}
      </span>
      <h4 className="text-light text-md md:text-xl font-semibold mb-3 md:mb-5">
        {title}
      </h4>
      <p className="text-slate-300 text-sm max-w-80 m-auto">{description}</p>
    </div>
  );
}
