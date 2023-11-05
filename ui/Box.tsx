import clsx from "clsx";

type BoxProps = React.HTMLAttributes<HTMLElement>;

export default function Box({ children, ...props }: BoxProps) {
  return (
    <div {...props} className={clsx("px-6 py-12 first:pt-24 last:pb-24 first:lg:pt-32 last:lg:pb-32", props.className)}>
      {children}
    </div>
  );
}
