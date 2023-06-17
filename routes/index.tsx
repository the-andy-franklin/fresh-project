import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import InstallPWAButton from "../islands/InstallPWAButton.tsx";

export default function Home() {
  return (
    <div className={tw`w-screen h-screen flex flex-col`}>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="manifest" href="/manifest.json" />
        <script src="/register-sw.js" />
        <script src="/install.js" defer />
      </Head>
      <nav
        className={tw`bg-gradient-linear from-pink-500 via-green-500 to-blue-500 text-white px-6 py-4`}
      >
        <span className={tw`text-5xl font-semibold text-white`}>
          Mezo
        </span>
      </nav>
      <div
        className={tw`w-full flex flex-col flex-grow bg-gray-800 text-green-300 flex items-center justify-center`}
      >
        <p className={tw`text-4xl font-bold p-4 text-rainbow`}>
          Hello World!
        </p>
        <InstallPWAButton />
      </div>
    </div>
  );
}
