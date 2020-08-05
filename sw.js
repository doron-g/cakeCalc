self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cakeCalc').then(function(cache) {
     return cache.addAll([
       '/cakeCalc/js/cakes.js',
       '/cakeCalc/img/whisk.png',
       '/cakeCalc/img/inst16.png',
       '/cakeCalc/index.html',
       '/cakeCalc/index.js',
       '/cakeCalc/img/whisk-icon.png'




     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});