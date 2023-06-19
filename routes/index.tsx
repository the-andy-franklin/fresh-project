import { tw } from "twind";
import type { JSX } from "preact";
import InstallPWAButton from "../islands/InstallPWAButton.tsx";

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
