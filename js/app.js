
// Register service worker to control making site work offline

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('service worker registered...woohoo', reg))
      .catch((err) => console.log('service worker not registered...bruh moment', err));
}
