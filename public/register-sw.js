if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/web_next/static/sw.js', {
      scope: '/'
    }).then(async function(registration) {
      console.log('ServiceWorker registration success', registration)
      // Registration was successful
      // if (window.PushManager) {
      //   // registration
      //   const subscription = await reg.pushManager.getSubscription()
      //   console.log('subscription', subscription)
      //   if (!subscription) {
      //     subscribeUser(registration);
      //   } else {
      //     console.log("你已订阅消息服务");
      //   }
      // }
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });

    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage("Hi service worker");
    })
  });
}

function subscribeUser () {

}