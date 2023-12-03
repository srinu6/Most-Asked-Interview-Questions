function deepCopyWithCircularReferences(obj, seen = new WeakMap()) {
  // Handle primitive values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Check if the object has been visited before to avoid circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }

  // Create a new object or array based on the type of the original object
  const copy = Array.isArray(obj) ? [] : {};

  // Store the copy in the map to handle circular references
  seen.set(obj, copy);

  // Recursively copy each property of the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopyWithCircularReferences(obj[key], seen);
    }
  }

  return copy;
}

// Example usage:
const originalObject = {
  name: "John",
  age: 30,
};

originalObject.self = originalObject; // Creating a circular reference

const deepCopy = deepCopyWithCircularReferences(originalObject);

console.log(deepCopy);
