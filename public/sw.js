// service worker 注册

const CACHE_NAME = 'dw-sw-1'
const CHCHE_URL = [
  '/favicon.ico',
  '/sw.js',
  '/manifest.json',
  '/registerSw.js'
]

const filterSource = [
  'webpack-hmr',
  'hm.gif',
  'hm.js'
]

const fetchCheck = (event) => {
  return /(http|https):\/\//.test(event.request.url)
    && !filterSource.some(item => event.request.url.includes(item))
}

// install、activate、message、fetch、push、async。

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CHCHE_URL)
        .then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName, i) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheNames[i])
          }
        })
      )
    })
  )
  self.clients.claim();
})


self.addEventListener('fetch', (event) => {
  // 只针对 http请求，
  if (fetchCheck(event)) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // 如何有缓存的话，那么就直接返回缓存，否则直接获取源文件
          return response ||
            fetch(event.request)
              .then((res) => {
                const cloneRes = res.clone()
                caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, cloneRes)
                })
                .then(() => self.skipWaiting())
                return res;
              }).catch(err => {
                // console.log(err);
              });
        }
      )
    );
  }
});


self.addEventListener('push', (event) => {
  // console.log('push e', event)
})
