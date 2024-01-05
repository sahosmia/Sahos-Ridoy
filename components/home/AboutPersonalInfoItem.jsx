import React from "react";

export function AboutPersonalInfoItem({ item }) {
  return (
    <div className="flex-shrink-1 flex-grow basis-[45%] text-base z-10">
      <h6 className="font-semibold  text-gray-700">{item.title}</h6>
      <p className="text-slate-500">{item.value}</p>
    </div>
  );
}
