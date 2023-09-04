import type { PageProps, RouteConfig } from "$fresh/server.ts";

export default function NotFoundPage({ url }: PageProps) {
  return <p>No page found for {url.pathname}</p>;
}

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};
