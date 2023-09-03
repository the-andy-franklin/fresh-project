import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data2: string;
}

export const handler = async (
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
): Promise<Response> => {
  ctx.state.data2 = "myData2";

  return ctx.next();;
};
