// import 'babel-polyfill' // 88kb/28.7kb
import React from 'react'
import ReactDOM from 'react-dom'
import { Toolbar } from './Toolbar'
import { toaster } from './toaster'

const baseMsg = '"Hello World" - auto-created text toast'

toaster.addToast({ content: `${baseMsg} (shell be closed manually)` })
toaster.addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

ReactDOM.render(
  (<Toolbar addToast={ toaster.addToast }/>)
  , document.getElementById( 'appRoot' ))
  // , document.getElementsByTagName( 'div' )[0])
