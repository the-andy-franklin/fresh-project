import Navbar from "../components/Navbar.tsx";
import type { JSX } from "preact";
import { LayoutProps } from "$fresh/server.ts";

type DivProps = JSX.IntrinsicElements["div"];
const Div = (props: DivProps) => (
  <div
    className="w-screen h-screen flex flex-col overflow-hidden"
    {...props}
  />
);

export default function Layout({ Component }: LayoutProps) {
  return (
    <Div>
      <Navbar />
      <Component />
    </Div>
  );
}
