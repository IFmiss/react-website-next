// service worker 注册

const CACHE_NAME = 'dw-sw'
const CHCHE_URL = [
  // 'https://www.daiwei.site/static/logo/dw.png'
]

// install、activate、message、fetch、push、async。

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(CHCHE_URL)
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
})


self.addEventListener('fetch', (event) => {

  // 只针对 http请求，
  if (/(http|https):\/\//.test(event.request.url) &&
      !event.request.url.includes('webpack-hmr')) {

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
