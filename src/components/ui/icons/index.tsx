import React, { FC } from "react";
import IconsSVG from "./icons.svg";

export type TIconsProps = {
  name: string;
  color?: string;
  size?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Icons: FC<TIconsProps> = ({
  name,
  color,
  size = 20,
  className = "",
  width,
  height,
}) => (
  <svg
    className={`${name} ${className}`}
    fill={color}
    stroke={color}
    width={width || size}
    height={height || size}
  >
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);

export default React.memo(Icons);
