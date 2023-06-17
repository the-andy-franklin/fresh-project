import Navbar from "../components/Navbar.tsx";
import { tw } from "twind";
import { PageProps } from "$fresh/server.ts";
import { Page } from "$fresh_layout/mod.ts";

export default function Layout(child: Page, props: PageProps) {
  return (
    <div className={tw`w-screen h-screen flex flex-col overflow-hidden`}>
      <Navbar />
      {child(props)}
    </div>
  );
}
