/* What is event bubbling and how can you prevent it?

Event bubbling is a mechanism in which an event that is triggered on a particular element will propagate up through its parent elements in the DOM hierarchy. This means that when an event is triggered on a child element, it will also be triggered on all of its parent elements, up to the root element of the document.

For example, if you have a button inside a div inside a section inside a main element, and you click the button, the click event will first trigger on the button, then on the div, then on the section, and finally on the main element.

This can be problematic in some cases, such as when you have multiple event listeners on different elements, and you only want one of them to be triggered.

To prevent event bubbling, you can use the stopPropagation() method of the event object. This method stops the event from propagating further up the DOM hierarchy.

For example, let's say you have a button inside a div, and you have event listeners on both the button and the div: */


<div id="myDiv">
  <button id="myButton">Click me</button>
</div>

<script>
  const myButton = document.getElementById("myButton");
  const myDiv = document.getElementById("myDiv");

  myButton.addEventListener("click", () => {
    console.log("Button clicked");
  });

  myDiv.addEventListener("click", () => {
    console.log("Div clicked");
  });
</script>
// If you click the button, both event listeners will be triggered, and the console will log "Button clicked" followed by "Div clicked".

// To prevent the event from propagating to the div, you can modify the event listener on the button to call stopPropagation():


myButton.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button clicked");
});
// Now, when you click the button, only the button's event listener will be triggered, and the console will log "Button clicked" without logging "Div clicked".

// It's important to use stopPropagation() carefully, as it can prevent other event listeners from being triggered and can cause unexpected behavior.





