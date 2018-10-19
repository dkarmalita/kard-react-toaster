const logValue = (id, val) => console.log(`${id}: %c${val}`, 'color: blue;')

const logAppInfo = () => {
  console.groupCollapsed('%cAPP INFO', 'border-bottom: 1px solid red;')
    console.group('Mode')
      logValue('mode', process.env.NODE_ENV)
      logValue('babel-polyfill', window._babelPolyfill ? true : false)
      logValue('CDN (--cdn)', process.env.ARGV.cdn)
    console.groupEnd()

    console.group('CDN')
      logValue('React', !!window.React)
      logValue('ReactDom', !!window.ReactDOM)
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
      logValue('protocol', protocol)
      logValue('host', host)
      logValue('pathname', pathname)
      logValue('search', search)
      logValue('port', port)
      logValue('href', href)
    console.groupEnd()
  console.groupEnd()
}

if( process.env.NODE_ENV === 'development' ){ logAppInfo() }
