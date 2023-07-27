/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { applyManifestLayouts } from "https://raw.githubusercontent.com/the-andy-franklin/fresh_layout/main/mod.ts";

const newManifest = applyManifestLayouts(manifest);

const wildcards = [];
for (const key in newManifest.routes) {
  if (key.endsWith("*.tsx")) {
    wildcards.push(key);
  }
}

// this is done so that wildcard routes yield to more specific routes
wildcards.reverse().forEach((key) => {
  const temp = newManifest.routes[key];
  delete newManifest.routes[key];
  newManifest.routes[key] = temp;
});

await start(newManifest, { plugins: [twindPlugin(twindConfig)] });
