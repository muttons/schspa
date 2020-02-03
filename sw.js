var CACHE_NAME = 'v3.0';
var urlsToCache = [
  '/index.js',
  '/css/style.css',
  '/event-calendar.html',
  '/event-monday.html',
  '/event-tuesday.html',
  '/event-wednesday.html',
  '/agency-directory.html',
  '/images/flower-512.png',
  '/images/flower-192.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then( cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {

        }).map(function(cacheName) {
          return caches.delete(cacheName)
        })
      );
    })
  );
});





self.addEventListener('fetch', event => {
  event.respondWith(

    fetch(event.request).catch(() => {

      return caches.match(event.request);
    })
  );
});
