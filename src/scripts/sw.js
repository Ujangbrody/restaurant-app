import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const RestoApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
  new StaleWhileRevalidate({
    cacheName: 'RestoApi-api',
  }),
);

const RestodbImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
  new StaleWhileRevalidate({
    cacheName: 'Restodb-image-api',
  }),
);

registerRoute(RestoApi);
registerRoute(RestodbImageApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});
