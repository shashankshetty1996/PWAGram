// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function() {
//     console.log("Service worker registered");
//   });
// }

var deferredPrompt;

// Enabling promise in older browsers.
if (!window.Promise) {
  window.Promise = Promise;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function() {
      console.log("Service worker registered");
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
