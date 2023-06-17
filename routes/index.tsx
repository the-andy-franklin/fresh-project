import { tw } from "twind";
import InstallPWAButton from "../islands/InstallPWAButton.tsx";

export default function Home() {
  return (
    <div
      className={tw`w-full flex flex-col flex-grow bg-gray-800 text-green-300 flex items-center justify-center`}
    >
      <p className={tw`text-4xl font-bold p-4 text-rainbow`}>
        Hello World!
      </p>
      <InstallPWAButton />
    </div>
  );
}
