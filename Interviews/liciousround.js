// Licious HR mentioned to prepare below items
// Basic array, binary
// time difference between two
// next great element
// string manipulation
// binary search

(function (x) {
  console.log("First IIFE executed");
  // You can do some work here

  // Return another IIFE
  return (function (y) {
    console.log("Nested IIFE executed", x);
    // You can do some work in the nested IIFE
  })(2);
})(1);

1 < 2 < 3;
3 > 2 > 1;

// How to intigrate another app into react native

// Lets suppose android app should call react native app that app should app another android app...
// how this executes(here all apps are with in the same project not SDKs)

// How react native code executes?
// When we touch a button on mobile how the whole app executes?
