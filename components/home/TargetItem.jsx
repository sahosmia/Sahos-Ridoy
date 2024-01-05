import React from "react";

export default function TargetItem({ item }) {
  const { icon, title, content } = item;
  return (
    <div className="p-5 md:p-8 flex-1 flex flex-col flex-wrap justify-center items-center bg-light border border-1 border-slate-100  rounded-lg  transition ease-in-out duration-300 shadow-sm">
      <span className="pb-2 md:pb-5 text-4xl md:text-5xl text-main">
        {icon}
      </span>
      <h4 className="text-xl md:text-2xl font-semibold pb-2 md:pb-5 text-center">
        {title}
      </h4>
      <p className="text-sm md:text-base text-center text-slate-600">
        {content}
      </p>
    </div>
  );
}
