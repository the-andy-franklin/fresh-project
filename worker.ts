function performTask() {
  let seconds = 0;

  setInterval(() => {
    self.postMessage(`Task running for ${++seconds} seconds.`);
  }, 1000);
}

self.onmessage = (event) => {
  if (event.data === "start") {
    performTask();
  }
};
