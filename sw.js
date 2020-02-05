const staticCacheName = 'site-static-v1.8';
const dynamicCacheName = 'site-dynamic-v1.8';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/main.js',
  '/css/style.css',
  '/css/bootstrap.min.css',
  '/js/owl.carousel.min.js',
  '/image/schspa-80v2.png',
  '/image/bg1.jpg',
  '/image/bg2.jpg',
  '/image/bg3.jpg',
  '/icon/favicon.ico',
  '/pages/fallback.html'
];

// install event
self.addEventListener('install', evt => {
  console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => caches.match('/pages/fallback.html'))
  );
});
