import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="manifest" href="/manifest.json" />
        <script src="/register-sw.js" />
      </Head>
      <Component />
    </>
  );
}
