// For example, suppose you don’t want to expose the entire <input> DOM node,
// but you want to expose two of its methods: focus and scrollIntoView. To do this,
// keep the real browser DOM in a separate ref. Then use useImperativeHandle to expose a handle
// with only the methods that you want the parent component to call:

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});

// Now, in App.js, whole Input DOM won't be able to access,
// only focus, scrollIntoView can be accessed in "try to access whole Input DOM" console
// We can create our own custom methods and can access them in parent component
