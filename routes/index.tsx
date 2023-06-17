import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { Layout } from "../components/Layout.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
        <link
          rel="manifest"
          href="/manifest.json"
        />

        <script src="/register-sw.js" />
      </Head>
      <Layout>
        <div
          className={tw`
        w-full h-screen
        bg-gray-800 text-green-300
        flex items-center justify-center
        `}
        >
          <p className={tw`text-4xl font-bold p-4 text-rainbow`}>
            Hello World!
          </p>
        </div>
      </Layout>
    </>
  );
}
