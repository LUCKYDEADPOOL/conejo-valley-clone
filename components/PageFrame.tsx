import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
