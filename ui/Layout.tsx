import { NextSeo, type NextSeoProps } from "next-seo";

type LayoutProps = {
  seo?: NextSeoProps;
  children?: React.ReactNode;
};

export default function Layout({ seo, children }: LayoutProps) {
  return (
    <>
      {seo && <NextSeo {...seo} />}
      <main className="min-h-screen">{children}</main>
    </>
  );
}
