`toaster` is a styled service which exports several elements:
* `toaster` - the toaster instance with the only mathod `addToast`
* `Toast` - styled wrapper which serves as the toast container.

## addToast

`addToast` has to get an object with two properties possible:
* `content` - text or a component to render inside the toast
* `timeout` - if thes, contains the quantity of milliseconds till the toast will be closad authomatically.


