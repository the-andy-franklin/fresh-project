import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Greet(props: PageProps) {
  const name = props.params.name.charAt(0).toUpperCase() +
    props.params.name.slice(1);

  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <nav
        className={`
          bg-gradient-linear 
          from-pink-500
          via-green-500
          to-blue-500
          text-white
          px-6 py-4
        `}
      >
        <span className={`text-5xl font-semibold text-white`}>
          Mezo
        </span>
      </nav>
      <div
        className={`
          w-full h-screen
          bg-gray-800 text-green-300
          flex items-center justify-center
        `}
      >
        <p className={`text-4xl font-bold p-4 text-rainbow`}>
          Hello {name}!
        </p>
      </div>
    </>
  );
}
