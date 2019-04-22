const cacheVersion = "v1";

self.addEventListener("install", function(event) {
  console.log("Service Worker: Installing");
});

self.addEventListener("activate", event => {
  console.log("Service Worker: Activated");
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (cacheVersion !== key) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function(event) {
  //console.log("Service Worker: Fetching " + event.request.url);
  event.respondWith(
    fetch(event.request)
      .then(res => {
        console.log('Getting result in sw')
        const resClone = res.clone();
        caches.open(cacheVersion).then(cache => {
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch(err => {
        return caches.match(event.request).then(res => res)
      })
  );
});
