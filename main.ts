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

const worker = new Worker(import.meta.resolve("./worker.ts"), {
  type: "module",
});

worker.onmessage = (event) => {
  console.log("Received message from worker:", event.data);
};

worker.postMessage("start");

const kv = await Deno.openKv();
const iter = kv.list({ prefix: [] });
const entries = [];
for await (const entry of iter) {
  entries.push(entry);
  await kv.delete(entry.key);
}
console.log(entries);

await start(applyManifestLayouts(manifest), {
  plugins: [twindPlugin(twindConfig)],
});
