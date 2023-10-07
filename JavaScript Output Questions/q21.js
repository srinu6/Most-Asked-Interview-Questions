console.log("first");

setTimeout(() => {
  console.log("second");
});

queueMicrotask(() => {
  console.log("third");
});

//queueMicrotask will have high priority
