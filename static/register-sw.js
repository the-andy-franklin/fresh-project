if ("serviceWorker" in navigator) {
  self.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope,
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      },
    );
  });
}
