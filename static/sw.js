importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js",
);

const CACHE = "mezo-offline-cache";

const offlineFallbackHtml = "offline.html";
const offlineFallbackCss = "offline.css";
const offlineFavicon = "favicon.ico";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll([
        offlineFallbackHtml,
        offlineFallbackCss,
        offlineFavicon,
      ])
    ),
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;
          if (preloadResp) return preloadResp;

          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(offlineFallbackHtml);
          return cachedResp;
        }
      })(),
    );
  } else if (event.request.url.endsWith(".css")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }),
    );
  }
});
