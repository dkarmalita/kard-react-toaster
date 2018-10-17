// import 'babel-polyfill' // 88kb/28.7kb
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'App'


console.groupCollapsed('Mode')
console.log('mode:', process.env.NODE_ENV)
console.log('CDN React', !!window.React)
console.log('CDN ReactDom', !!window.ReactDOM)
console.log('babel-polyfill:', window._babelPolyfill ? true : false)
console.groupEnd()

// Get URL parsed
// refs:
// * https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
// * https://www.w3schools.com/js/js_window_location.asp
const { protocol, host, pathname, search, port, href } = window.location
if( pathname === '/' ){
  window.location.assign(`${protocol}//${host}/newpath?s=flexbox`)
}
console.groupCollapsed('Location')
console.log('protocol:', protocol)
console.log('host:', host)
console.log('pathname:', pathname)
console.log('search:', search)
console.log('port:', port)
console.log('href:', href)
console.groupEnd()


ReactDOM.render(
  <App/>
  , document.getElementById( 'appRoot' ))
