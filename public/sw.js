self.addEventListener("install", function(event) {
  console.log("[Service Worker]: Installing service worker", event);
  event.waitUntil(
    caches.open("static").then(function(cache) {
      console.log("[Service Worker]: Pre-caching App Shell");
      cache.add("/");
      cache.add("/index.html");
      cache.add("/src/js/app.js");
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("[Service Worker]: Activating service worker", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  //   console.log("[Service Worker]: Fetching something...", event);
  // Override response
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Intercept the request if cache found
      if (response) {
        return response;
      } else {
        // Not found in cache
        return fetch(event.request);
      }
    })
  );
});
