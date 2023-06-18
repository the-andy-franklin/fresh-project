import { PageProps } from "$fresh/server.ts";
import { tw } from "twind";
import type { JSX } from "preact";

type DivProps = JSX.IntrinsicElements["div"];
const Div = (props: DivProps) => (
  <div
    className={tw`w-full flex flex-col flex-grow items-center justify-center bg-gray-800 text-green-300`}
    {...props}
  />
);

type pProps = JSX.IntrinsicElements["p"];
const P = (props: pProps) => (
  <p
    className={tw`text-4xl font-bold p-4 text-rainbow`}
    {...props}
  />
);

export default function Name(props: PageProps) {
  const name = props.params.name.charAt(0).toUpperCase() +
    props.params.name.slice(1);

  return (
    <Div>
      <P>
        Hello {name}!
      </P>
    </Div>
  );
}
