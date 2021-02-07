importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCQyxiiZuYciSkJh6KQuGIJUYLJSC_ZFWM",
  authDomain: "sureplus-mobile-notifications.firebaseapp.com",
  projectId: "sureplus-mobile-notifications",
  storageBucket: "sureplus-mobile-notifications.appspot.com",
  messagingSenderId: "1021100299959",
  appId: "1:1021100299959:web:e40620284c9c2da9e11f32",
});

const initMessaging = firebase.messaging();

initMessaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
