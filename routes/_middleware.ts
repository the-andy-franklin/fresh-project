import { MiddlewareHandlerContext } from "$fresh/server.ts";

export const handler = (
  req: Request,
  ctx: MiddlewareHandlerContext,
) => {
  // ctx.state = { a: { b: "c" } } // doesn't work

  // works
  Object.assign(ctx.state, {
    a: {
      b: "c",
    },
  });

  return ctx.next();
};
