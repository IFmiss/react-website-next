const webpush = require('web-push');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('service-worker: 👌👌👌');
    if (window.PushManager) {
      registration.pushManager.getSubscription().then(subscription => {
        // 如果用户没有订阅
        if (!subscription) {
          subscribeUser(registration);
        } else {
          console.log("You have subscribed our notification");
        } 
      })
    }
  }).then((registration) => {
      // Notification.requestPermission()
      // .then((status) => {
      //   if (status === 'granted') {
      //     registration?.showNotification('foo');
      //     subscribeUser(registration);
      //     console.info(registration)
      //   }
      // }).catch(e => {
      //   if (Notification.permission === 'denied') {
      //     console.log('Permission for Notifications was denied');
      //   } else {
      //     console.log('Unable to subscribe to push.', e);
      //   }
      // })
  });
}

function subscribeUser(registration) {
  const applicationServerPublicKey = webpush.generateVAPIDKeys();
  const applicationServerKey = urlBase64ToUint8Array(applicationServerPublicKey);
  registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
  }).then(function(subscription) {
    console.log('User is subscribed:', JSON.stringify(subscription));
    console.info({subscription: JSON.stringify(subscription)})
  }).catch(function(err) {
    // 用户不同意或者生成失败
    console.log('Failed to subscribe the user: ', err);
  });
}


// Web-Push
// Public base64 to Uint
function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
