if( !process.env.ARGV.cdn ){ require('babel-polyfill') /* 88kb/28.7kb */ }
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'App'

console.groupCollapsed('APP INFO')
  console.group('Mode')
  console.log('mode:', process.env.NODE_ENV)
  console.log('babel-polyfill:', window._babelPolyfill ? true : false)
  console.groupEnd()

  console.group('CDN')
  console.log('React', !!window.React)
  console.log('ReactDom', !!window.ReactDOM)
  console.groupEnd()

// Get URL parsed
// refs:
// * https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
// * https://www.w3schools.com/js/js_window_location.asp
const { protocol, host, pathname, search, port, href } = window.location
if( pathname === '/' ){
  window.location.assign(`${protocol}//${host}/newpath?s=flexbox`)
}
  console.group('Location')
  console.log('protocol:', protocol)
  console.log('host:', host)
  console.log('pathname:', pathname)
  console.log('search:', search)
  console.log('port:', port)
  console.log('href:', href)
  console.groupEnd()
console.groupEnd()


ReactDOM.render(
  <App/>
  , document.getElementById( 'appRoot' ))
