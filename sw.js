/* Gym Timer — service worker propio, alcance /gym/ */
var CACHE = 'gym-timer-v15';
var ASSETS = ['./', './index.html', './manifest.json', './icon.svg', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate'){
    // el login de Google vive en /__/auth/: que pase de largo, y sobre todo
    // que no acabe guardado como si fuera la portada de la app
    var ruta = new URL(req.url).pathname;
    if (ruta !== '/' && ruta !== '/index.html') return;
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put('./index.html', copy); });
        return res;
      }).catch(function(){
        return caches.match('./index.html').then(function(r){ return r || caches.match('./'); });
      })
    );
    return;
  }
  e.respondWith(caches.match(req).then(function(hit){ return hit || fetch(req); }));
});
