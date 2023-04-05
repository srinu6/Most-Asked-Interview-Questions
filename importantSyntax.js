// Fetch API syntax

fetch("URL", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "Sri",
    password: "Sri",
  }),
});

// Higher Order Component Syntax

function simpleHoc(WrappedComponent) {
  return <WrappedComponent {...props} />;
}

const NewComponent = simpleHoc(ComponentX);

<NewComponent />;


// How can you fetch data from a local JSON file in React Native?

const newData = require(./content.json);
import * as data from './content.json';
