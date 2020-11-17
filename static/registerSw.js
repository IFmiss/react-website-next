// importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
// importScripts(
//     "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
// );
// // For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
// importScripts(
//     "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
// );

// firebase.initializeApp({
//   apiKey: "AIzaSyAMTZYWmwmqnl1a7jpdkc8gmiL1UNb39Ek",
//   authDomain: "website-10286.firebaseapp.com",
//   databaseURL: "https://website-10286.firebaseio.com",
//   projectId: "website-10286",
//   storageBucket: "website-10286.appspot.com",
//   messagingSenderId: "960070276528",
//   appId: "1:960070276528:web:f7fa9dc8d045f79846b275",
//   measurementId: "G-1DMP961GLG"
// });

// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log(
//       "[firebase-messaging-sw.js] Received background message ",
//       payload,
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//       body: "Background Message body.",
//       icon: "/itwonders-web-logo.png",
//   };

//   return self.registration.showNotification(
//       notificationTitle,
//       notificationOptions,
//   );
// });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('service-worker: 👌👌👌');
    if (window.PushManager) {
      registration.pushManager.getSubscription().then(subscription => {
        // 如果用户没有订阅
        console.info('s', JSON.stringify(subscription))
        if (!subscription) {
          subscribeUser(registration);
        } else {
          console.info(subscription)
          console.log("You have subscribed our notification");
        } 
      })
    }
  })
}

function subscribeUser(registration) {
  // Public Key:
  // BJOVnfkuVBZBXMVVzdFOtQGbAHvdoF7-7AcGHa7J8bGEL3tI_Htb7bxGtsNzTiHqmcXwm7YkNNO_0auf1AP8m-A

  // Private Key:
  // FRuBFzS-wqHTRBneR0YlupJz8i1pagf_KJSPTJI1Esg

  const applicationServerPublicKey = 'BJOVnfkuVBZBXMVVzdFOtQGbAHvdoF7-7AcGHa7J8bGEL3tI_Htb7bxGtsNzTiHqmcXwm7YkNNO_0auf1AP8m-A';
  const applicationServerKey = urlBase64ToUint8Array(applicationServerPublicKey);
  console.info(123123, applicationServerKey)
  registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey
  }).then((subscription) => {
    // ajax
    console.info('subscription', JSON.stringify(subscription))
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

function uint8ArrayToBase64 (arr) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(arr)))
}

