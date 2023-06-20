import type { JSX } from "preact";

type NavProps = JSX.IntrinsicElements["nav"];
const Nav = (props: NavProps) => (
  <nav
    className="bg-gradient-linear from-purple-500 via-green-500 to-blue-500 text-white px-6 py-4"
    {...props}
  />
);

type SpanProps = JSX.IntrinsicElements["span"];
const Span = (props: SpanProps) => (
  <span
    className="text-5xl font-semibold text-white text-outline"
    {...props}
  />
);

export default function Navbar() {
  return (
    <Nav>
      <Span>
        Mezo
      </Span>
    </Nav>
  );
}
