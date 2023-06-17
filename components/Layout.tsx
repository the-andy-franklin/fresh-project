import { tw } from "twind";
import { ComponentChildren } from "preact";

export function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
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
      {children}
    </>
  );
}
