if ("serviceWorker" in navigator) {
  self.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js");
  });
}
