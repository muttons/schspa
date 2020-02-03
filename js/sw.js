var CACHE_NAME = 'v1';
var urlsToCache = [
  '/schspa/',
  '/schspa/index.html',
  '/schspa/js/index.js',
  '/schspa/css/style.css',
  '/schspa/agency_directory.html',
  '/schspa/event-calendar.html',
  '/schspa/event-monday.html',
  '/schspa/event-tuesday.html',
  '/schspa/event-wednesday.html',
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
