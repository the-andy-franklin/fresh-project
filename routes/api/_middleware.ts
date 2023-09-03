import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data2: string;
}

export const handler = async (
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
): Promise<Response> => {
  ctx.state.data2 = "myData2";

  const response = await ctx.next();
  response.headers.set("x-data2", ctx.state.data2);

  return response;
};
