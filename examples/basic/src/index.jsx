import 'babel-polyfill' // 88kb/28.7kb
import React from 'react'
import ReactDOM from 'react-dom'
import { initToaster, addToast } from '@kard/react-toaster'
import { ToastWrapper } from './ToastWrapper'
import { Toolbar } from './Toolbar'

import { Toaster } from '@kard/react-toaster'

const baseMsg = '"Hello World" - auto-created text toast'

// initToaster(({content})=><div>{ content }</div>)
initToaster(ToastWrapper)
addToast({ content: `${baseMsg} (shell be closed manually)` })
addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

const toaster = new Toaster(ToastWrapper, document.getElementById( 'toasterRoot'))
toaster.addToast({ content: `${baseMsg} (shell be closed manually)` })
toaster.addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

ReactDOM.render(
  (<Toolbar addToast={ addToast }/>)
  , document.getElementById( 'appRoot' ))
  // , document.getElementsByTagName( 'div' )[0])
