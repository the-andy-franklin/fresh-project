import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any, { data: string }> = {
  GET(req, ctx) {
    return ctx.render(ctx.state.data);
  },
};

export default function MyHandler({ data }: PageProps) {
  return (
    <div className="w-screen h-screen bg-gray-800 text-gray-50">
      hello world
    </div>
  );
}
