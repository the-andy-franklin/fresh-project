import type { HandlerContext, PageProps } from "$fresh/server.ts";
import { z } from "zod";

const outSchema = z.array(
  z.object({}).passthrough(),
);

type Out = z.infer<typeof outSchema>;

export const handler = async (req: Request, ctx: HandlerContext) => {
  const route = req.url.slice(req.url.lastIndexOf("/") + 1);
  const kv = await Deno.openKv();

  await kv.set([404], route);

  const iter = kv.list({ prefix: [] });
  const entries = [];
  for await (const entry of iter) {
    entries.push(entry);
    await kv.delete(entry.key);
  }

  const out = outSchema.parse(entries);
  return await ctx.render(out);
};

export default function NotFoundPage(
  props: PageProps<Out>,
) {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
}
