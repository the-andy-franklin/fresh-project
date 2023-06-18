import Navbar from "../components/Navbar.tsx";
import { tw } from "twind";
import { PageProps } from "$fresh/server.ts";
import { Page } from "$fresh_layout/mod.ts";
import type { JSX } from "preact";

type DivProps = JSX.IntrinsicElements["div"];
const Div = (props: DivProps) => (
  <div
    {...props}
    className={tw`w-screen h-screen flex flex-col overflow-hidden`}
  />
);

export default function Layout(child: Page, props: PageProps) {
  return (
    <Div>
      <Navbar />
      {child(props)}
    </Div>
  );
}
