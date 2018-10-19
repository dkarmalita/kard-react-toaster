In the case, `store` is a global container which keeps the application's state and exports 3 major elements:
* `Provider` - a jsx container of the application which makes the store avaliabl.
* `connect` - a function which allows to connect some jsx component to the store in redux-like container.
* `getStore` a method which returns the whole store created at the start. 
