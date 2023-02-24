const staticCacheName = 'site-static-v17.05';
const dynamicCacheName = 'site-dynamic-v17.05';
const assets = [
  '',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/db.js',
  '/src/searchApp.js',
  '/src/searchApp.css',
  '/css/styles.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
  '/pages/fallback.html',
  '/pages/event-calendar.html',
  '/pages/event-conventionMap.html',
  '/pages/event-conferenceCommittee.html',
  '/pages/event-2023-Conference.html',
  '/pages/event-monday.html',
  '/pages/event-tuesday.html',
  '/pages/event-wednesday.html',
  '/pages/event-speakerBios.html',
  '/pages/search.html',
  '/img/bg1.webp',
  '/img/bg2.webp',
  '/img/bg3.webp',
  '/img/bg4.webp',
  '/img/futurebg2.webp',
  '/img/futurebg4.webp',
  '/img/futurebackground3.webp',
  '/img/conferenceLogo.webp',
  '/img/ec.webp',
  '/img/adirectory.webp',
  '/img/Atech.webp',
  '/img/awm.webp',
  '/img/BamburgCountyDSNB.webp',
  '/img/Brown&Brown.webp',
  '/img/ConventionMap-1.webp',
  '/img/curryinsurance.webp',
  '/img/eBridge.webp',
  '/img/futurebg1.webp',
  '/img/HodgeSystems.webp',
  '/img/MarshMcLennanAgency.webp',
  '/img/PalmettoBusSales.webp',
  '/img/PalmettoRX.webp',
  '/img/SelectLabs.webp',
  '/img/StationMD.webp',
  '/img/Therap.webp',
  '/img/therap2.webp',
  '/img/truelink.webp',
  '/img/vecteezy_bg1.webp',
  '/manifest.json',

];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
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

// fetch events and fallback page
self.addEventListener('fetch', evt => {
  if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, 30);
            return fetchRes;
          })
        });
      }).catch(() => {
        if(evt.request.url.indexOf('.html') > -1){
          return caches.match('/pages/fallback.html');
        }
      })
    );
  }
});
