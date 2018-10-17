// import 'babel-polyfill' // 88kb/28.7kb
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'App'

console.log('React', React)
console.log('ReactDom', ReactDOM)
console.log('babel-polyfill', window._babelPolyfill ? true : false)
console.log(process.env.NODE_ENV)

ReactDOM.render(
  <App/>
  , document.getElementById( 'appRoot' ))
