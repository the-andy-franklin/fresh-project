import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { tw } from "twind";
import Navbar from "../components/Navbar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <div className={tw`w-screen h-screen flex flex-col overflow-hidden`}>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="manifest" href="/manifest.json" />
        <script src="/register-sw.js" />
        <script src="/install.js" defer />
      </Head>
      <Navbar />
      <Component />
    </div>
  );
}
