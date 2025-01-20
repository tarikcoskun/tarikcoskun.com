import React from "react";
import mdi from "./collections/mdi";
import lucide from "./collections/lucide";
import devicon from "./collections/devicon";

export interface IconCollection {
  specs: {
    viewBox: string;
    size: number | string;
    props: React.SVGProps<SVGPathElement>;
  };
  icons: Record<string, React.ReactNode>;
}

const collections = {
  mdi,
  lucide,
  devicon,
};

type Collections = keyof typeof collections;

export type IconList<T extends Collections> = keyof typeof collections[T]["icons"];

interface IconProps<T extends Collections> extends React.ComponentPropsWithoutRef<"svg"> {
  collection?: T;
  icon: IconList<T>;
  size?: number | string;
}

export function Icon<T extends Collections = "lucide">(props: IconProps<T>) {
  const { icon, collection = "lucide", size = collections[collection].specs.size, ...iconProps } = props;

  const { specs, icons } = collections[collection];
  const body = icons[icon as keyof typeof icons] as React.ReactElement;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={specs.viewBox}
      width={size}
      height={size}
      {...iconProps}
    >
      {React.cloneElement(body, {
        ...specs.props,
        ...body.props,
      })}
    </svg>
  );
}
