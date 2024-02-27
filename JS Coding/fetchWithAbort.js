const controller = new AbortController();
const signal = controller.signal;

fetch("URL", { signal })
  .then((d) => console.log(d, "success"))
  .catch((err) => {
    console.log(err, "failure");
  });

setTimeout(() => {
  controller.abort();
}, 1000);

// we can have seperate buttons for each operation
// Below is the suitable example

let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Download aborted");
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
