import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function MyHandler(state: PageProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-800 text-gray-50">
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
