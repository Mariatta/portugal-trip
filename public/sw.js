// Service Worker for Portugal 2026 Trip PWA
// Update CACHE_VERSION to bust caches when deploying new content
var CACHE_VERSION = 'portugal-2026-v3';
var BASE = '/portugal-trip';

var PRECACHE_URLS = [
  BASE + '/',
  BASE + '/porto/',
  BASE + '/lisbon/',
  BASE + '/aveiro/',
  BASE + '/checklist/',
  BASE + '/budget/',
  BASE + '/log/',
  BASE + '/sync/',
  BASE + '/about/',
  BASE + '/favicon.svg',
  BASE + '/icon-192.svg',
  BASE + '/icon-512.svg'
];

// Install — precache core pages
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate — clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_VERSION;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch — stale-while-revalidate for navigations, cache-first for assets
self.addEventListener('fetch', function(event) {
  var request = event.request;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests (CDN scripts like Chart.js, fonts)
  if (!request.url.startsWith(self.location.origin)) {
    // Network-first for external resources
    event.respondWith(
      fetch(request).catch(function() {
        return caches.match(request);
      })
    );
    return;
  }

  // For HTML pages: network-first, fall back to cache when offline
  if (request.headers.get('Accept') && request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request).then(function(response) {
        if (response.ok) {
          var responseClone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(request, responseClone);
          });
        }
        return response;
      }).catch(function() {
        return caches.match(request);
      })
    );
    return;
  }

  // For other assets: cache-first, fallback to network
  event.respondWith(
    caches.match(request).then(function(cached) {
      if (cached) return cached;
      return fetch(request).then(function(response) {
        if (response.ok) {
          var responseClone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) {
            cache.put(request, responseClone);
          });
        }
        return response;
      });
    })
  );
});