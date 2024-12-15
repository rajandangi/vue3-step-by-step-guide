## Points to remember 🧘
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


## Resources  📚
- [SON Server](https://www.npmjs.com/package/json-server/v/0.7.19)
- [Vuejs Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)


## Installation 🛠
-  `npm install` to install all the dependencies.
- `npx json-server db.json -p 3001` to start the json server.