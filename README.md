### Points to remember 🧘
---
- Parent Component can pass data to child component using props.Ex.
    ```vue
    <child-component :prop-name="data" /> // in parent component
    ```

    ```vue
    props: {
        propName: {
            type: String,
        }
    } // in child component
    ```

- Child component can pass data to parent component using events. Ex.
    ```vue
    this.$emit('event-name', data) // in child component
    ```
    ```vue
    <child-component @event-name="handlerMethod" /> // in parent component
    ```