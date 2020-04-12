importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js'
);

function workboxSetting () {
  workbox.core.setCacheNameDetails({
    prefix: 'dw-app',
    suffix: 'v1',
    precache: 'dw-precache',
    runtime: 'dw-runtime',
  })

  workbox.precaching([
    // 注册成功后要立即缓存的资源列表
  ])

  // html的缓存策略
  workbox.routing.registerRoute(
    '/',
    new NetworkFirst({ cacheName: 'html-cache' })
  );

  workbox.routing.registerRoute(
    /\/blog/,
    new StaleWhileRevalidate({ cacheName: 'html-cache' })
  );

  workbox.routing.registerRoute(
    /\/blog\/detail\?id=.*/,
    new NetworkFirst({ cacheName: 'html-cache' })
  );

  workbox.routing.registerRoute(
    /\.(js|css)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'css-js-cache'
    })
  );

  workbox.routing.registerRoute(
    new RegExp('daiwei.site'),
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    /\/api/,
    new NetworkFirst({ cacheName: 'api-cache' })
  );

  workbox.routing.registerRoute(
    new RegExp('.*\.(?:png|jpg|jpeg|svg|gif|ico)$'),
    new CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 20,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        }),
      ],
    })
  );
}

if (workbox) {
  workboxSetting()
  console.log('🌹box load success')
} else {
  console.log('box load fail 😊')
}