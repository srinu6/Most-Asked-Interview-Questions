function toCamelCase(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return non-object values as is
  }

  if (Array.isArray(obj)) {
    // If it's an array, map over each element and convert keys
    return obj.map((item) => toCamelCase(item));
  }

  // If it's an object, convert keys to camel case
  const camelCaseObject = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (_, match) =>
        match.toUpperCase()
      );
      camelCaseObject[camelCaseKey] = toCamelCase(obj[key]);
    }
  }

  return camelCaseObject;
}

// Example usage:
const snakeCaseObject = {
  user_info: {
    first_name: "John",
    last_name: "Doe",
    contact_details: {
      email_address: "john.doe@example.com",
    },
  },
  role_type: "admin",
};

const camelCaseObject = toCamelCase(snakeCaseObject);
console.log(JSON.stringify(camelCaseObject, null, 2));
