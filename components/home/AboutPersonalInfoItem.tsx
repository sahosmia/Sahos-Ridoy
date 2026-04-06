// components/home/AboutPersonalInfoItem.jsx
"use client";
import DynamicIcon from "../core/DynamicIcon";

export const AboutPersonalInfoItem = ({ item }) => {
  return (
    <div className="flex items-start gap-3 group">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <DynamicIcon name={item.icon} className="w-5 h-5" />
      </div>
      <div>
        <p className="text-text-muted text-sm uppercase tracking-wide">{item.label}</p>
        <p className="text-text-primary font-medium mt-0.5">{item.value}</p>
      </div>
    </div>
  );
};