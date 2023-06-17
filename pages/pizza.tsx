import { PageProps } from "$fresh/server.ts";
import { tw } from "twind";

export default function Greet(props: PageProps) {
  const name = props.params.name.charAt(0).toUpperCase() +
    props.params.name.slice(1);

  return (
    <div
      className={tw`w-full flex flex-col flex-grow bg-gray-800 text-green-300 flex items-center justify-center`}
    >
      <p className={tw`text-4xl font-bold p-4 text-rainbow`}>
        Hello Pizza!
      </p>
    </div>
  );
}
