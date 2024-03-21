**we have a A component, in A, we have B, C, D components, for B, we don't have state or props. For C, D we have state, props that are changing. If state of A is changed then does B rerender?**

If Component A's state changes, React will trigger a re-render of Component A.
Component A will then re-render its children, including Components B, C, and D.

Now, whether Components B, C, and D actually re-render depends on several factors:

Component B: Since Component B doesn't have state or props that are changing, it will not re-render when its parent (Component A) re-renders. React won't re-render components that don't depend on state or props changes.

Component C and D: If Components C and D receive new props or have state changes, they will re-render. However, their re-rendering is not directly triggered by the state change in Component A unless Component A is also passing new props to Components C and D as a result of its own state change.
