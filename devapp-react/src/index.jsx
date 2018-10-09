import 'babel-polyfill' // 88kb/28.7kb
import React from 'react'
import ReactDOM from 'react-dom'
import { initToaster, addToast } from '@kard/react-toaster'
import { ToastWrapper } from './ToastWrapper'

initToaster(ToastWrapper)

addToast({ content: 'Hello World A' })
addToast({ content: 'Hello World B', timeout: 4000  })
addToast({ content: 'Hello World C' })

ReactDOM.render(
  (<div>React App</div>)
  , document.getElementsByTagName( 'div' )[0])
