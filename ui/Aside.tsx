import clsx from "clsx";

type AsideProps = React.HTMLAttributes<HTMLElement>;

export default function Aside({ children, ...props }: AsideProps) {
  return (
    <aside
      {...props}
      className={clsx("left-0 float-left -ml-[--aside-width] w-full max-w-[--aside-width] text-sm leading-loose", props.className)}
    >
      {children}
    </aside>
  );
}
