'use strict';
// A browser only offers "Install app" for a page that has a service worker. This one keeps nothing:
// every request goes straight to the network, so the notebook is always the live one.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
