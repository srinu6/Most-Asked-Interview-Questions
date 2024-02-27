const cachedAPIcall = (time) => {
  const cache = {};

  return async function (path, config = {}) {
    // for generating unique keys
    const key = genetateKey(path, config);

    const entry = cache[key];
    if (!entry || Date.now() > entry.expiry) {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        cache[key] = { data, expiry: Date.now() + time };
      } catch (err) {
        console.log(err);
      }
    }
    return cache[key].data;
  };
};

const call = cachedAPIcall(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {});
