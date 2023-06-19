import { MiddlewareHandlerContext } from "https://deno.land/x/fresh@1.1.6/server.ts";

interface State {
  data2: string;
}

export const handler = async (
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
): Promise<Response> => {
  ctx.state.data2 = "myData2";
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
};
