/*
clevertap.notifications.push({
  "titleText":'Would you like to receive Push Notifications?',
  "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
  "okButtonText":'Sign me up!',
  "rejectButtonText":'No thanks',
  "okButtonColor":'#2e1825',
  "rejectButtonColor":'#987f62'
});
*/
clevertap.notifications.push({
   	"titleText": "Would you like to receive Push Notifications?",
   	"bodyText": "We promise to only send you relevant content and give you updates on your transactions",
   	"okButtonText": "Sign me up!",
   	"rejectButtonText": "No thanks",
   	"okButtonColor":"#F28046",
   	"askAgainTimeInSeconds":20,
  	"serviceWorkerPath": "/clevertap_sw.js" // path to your custom service worker file
  });
