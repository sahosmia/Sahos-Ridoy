export default function ContactSocialItem({ contact }) {
  const { bg, color, icon, title, val } = contact;
  return (
    <div className="flex items-center gap-2 md:gap-5">
      <span
        style={{ color, background: bg }}
        className={`flex justify-center items-center   text-md md:text-xl w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 rounded-full`}
      >
        {icon}
      </span>
      <div className="flex flex-col">
        <h6 className="text-md md:text-lg lg:text-xl font-bold text-gray-700">
          {title}
        </h6>
        <p className="text-slate-400 break-words text-sm md:text-base">{val}</p>
      </div>
    </div>
  );
}
