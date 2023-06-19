import type { HandlerContext, PageProps } from "$fresh/server.ts";

export const handler = async (req: Request, ctx: HandlerContext) => {
  const route = req.url.slice(req.url.lastIndexOf("/") + 1);
  const kv = await Deno.openKv();

  await kv.set(["404", req.url], route);

  const iter = kv.list({ prefix: ["404"] });
  const entries = [];
  for await (const entry of iter) {
    entries.push(entry);
    await kv.delete(entry.key);
  }

  return await ctx.render(entries);
};

export default function NotFoundPage(
  props: PageProps,
) {
  return (
    <>
      <p>404 not found: {props.url.pathname}</p>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </>
  );
}
