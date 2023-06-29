import PersistantCounter from "../islands/PersistantCounter.tsx";
import { PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";

type DivProps = JSX.IntrinsicElements["div"];
const Div = (props: DivProps) => (
  <div
    className="w-full flex flex-col flex-grow items-center justify-center bg-gray-800 text-rainbow"
    {...props}
  />
);

type pProps = JSX.IntrinsicElements["p"];
const P = (props: pProps) => (
  <p
    className="text-4xl font-bold p-4"
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
      <PersistantCounter pathname={props.url.pathname} />
    </Div>
  );
}
