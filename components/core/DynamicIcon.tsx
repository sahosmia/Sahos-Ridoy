import React from "react";
import { iconMap, IconName } from "@/lib/icons";
import { IconBaseProps } from "react-icons";

interface DynamicIconProps extends IconBaseProps {
  name: string;
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const IconComponent = iconMap[name as IconName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default DynamicIcon;
