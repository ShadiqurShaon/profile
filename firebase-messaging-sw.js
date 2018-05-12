importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCKgVDDMYuMwWU9O9b0C28nIEKVlVTSHP8",
    authDomain: "profile-e916a.firebaseapp.com",
    databaseURL: "https://profile-e916a.firebaseio.com",
    projectId: "profile-e916a",
    storageBucket: "profile-e916a.appspot.com",
    messagingSenderId: "283123027809"
  };
  firebase.initializeApp(config);
  const messaging = firebase.messaging();
  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });