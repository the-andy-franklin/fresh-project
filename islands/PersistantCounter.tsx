import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

type DivProps = JSX.IntrinsicElements["div"];
const Div = (props: DivProps) => (
  <div
    className="w-full flex flex-col items-center justify-center bg-gray-800"
    {...props}
  />
);

type h1Props = JSX.IntrinsicElements["h1"];
const H1 = (props: h1Props) => (
  <h1
    className="text-4xl font-bold p-4 text-center text-rainbow"
    {...props}
  />
);

type buttonProps = JSX.IntrinsicElements["button"];
const Button = (props: buttonProps) => (
  <button
    className="border rounded px-4 py-2 text-rainbow"
    {...props}
  />
);

type Props = {
  pathname: string;
};

const PersistantCounter = ({ pathname }: Props) => {
  const init = parseInt(localStorage.getItem(`counter/${pathname}`) || "0");
  const counter = useSignal(init);
  counter.subscribe((value) => {
    localStorage.setItem(`counter/${pathname}`, value.toString());
  });

  return (
    <Div>
      <H1>
        {counter}
      </H1>
      <Div className="flex gap-2">
        <Button onClick={() => counter.value--}>-</Button>
        <Button onClick={() => counter.value++}>+</Button>
      </Div>
    </Div>
  );
};

export default PersistantCounter;
