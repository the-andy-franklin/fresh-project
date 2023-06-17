import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
        <link
          crossOrigin="use-credentials"
          rel="manifest"
          href="/manifest.json"
        />

        <script type="module">
          import
          'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js';
          const el = document.createElement('pwa-update');
          document.body.appendChild(el);
        </script>

        <script>
          if ('serviceWorker' in navigator){" "}
          {self.addEventListener("load", function () {
            navigator.serviceWorker.register("/pwa-sw.js").then(
              function (registration) {
                console.log(
                  "ServiceWorker registration successful with scope: ",
                  registration.scope,
                );
              },
              function (err) {
                console.log("ServiceWorker registration failed: ", err);
              },
            );
          })}
        </script>
      </Head>
      <nav
        className={tw`
          bg-gradient-linear 
          from-pink-500
          via-green-500
          to-blue-500
          text-white
          px-6 py-4
        `}
      >
        <span className={tw`text-5xl font-semibold text-white`}>
          Mezo
        </span>
      </nav>
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
    </>
  );
}
