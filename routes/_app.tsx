import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Unlock Your Personalized Cannabinoid Profile"
        />
        <meta name="theme-color" content="#1F2937" />
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="manifest" href="/manifest.json" />
        <script src="/register-sw.js" />
      </Head>
      <Component />
    </>
  );
}
