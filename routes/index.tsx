import type { JSX } from "preact";
import InstallPWAButton from "../islands/InstallPWAButton.tsx";

type DivProps = JSX.IntrinsicElements["div"];
const Div = (props: DivProps) => (
  <div
    className="w-full flex flex-col flex-grow items-center justify-center bg-gray-800"
    {...props}
  />
);

type pProps = JSX.IntrinsicElements["p"];
const P = (props: pProps) => (
  <p
    className="text-4xl font-bold p-4 text-center text-rainbow"
    {...props}
  />
);

export default function Home() {
  return (
    <Div>
      <P>
        Hello World!
      </P>
      <InstallPWAButton />
    </Div>
  );
}
