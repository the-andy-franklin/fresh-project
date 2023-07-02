import type { HandlerContext, PageProps } from "$fresh/server.ts";

export const handler = async (req: Request, ctx: HandlerContext) => {
  return await ctx.render();
};

export default function NotFoundPage({ url }: PageProps) {
  return <p>No page found for {url.pathname}</p>;
}
