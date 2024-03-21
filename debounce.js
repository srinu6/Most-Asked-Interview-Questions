/*Most Asked JavaScript Theoritical interview 
  concepts  with Examples! 
  
  Debounce: Debouncing is a practice used to
  ensure that time-consuming tasks do not fire 
  so often. If a method is invoked frequently,
  it might greatly affect the performance of 
  the browser. 

  Concept-4: Debounce Example! 
*/

const debounce = (func, wait) => {
  let timeout;
  return function mainFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(delay, wait);
  };
};

const debounce = function (fn, d) {
  let timer;

  return function () {
    const context = this;

    const args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

debounce(apiCall(), 500);
