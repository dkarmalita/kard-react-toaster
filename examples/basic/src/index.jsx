import 'babel-polyfill' // 88kb/28.7kb
import React from 'react'
import ReactDOM from 'react-dom'
// import { initToaster, addToast } from '@kard/react-toaster'
import { ToastWrapper } from './ToastWrapper'
import { Toolbar } from './Toolbar'

import { Toaster } from '@kard/react-toaster'

const baseMsg = '"Hello World" - auto-created text toast'

// initToaster(({content})=><div>{ content }</div>)
// initToaster(ToastWrapper)
// addToast({ content: `${baseMsg} (shell be closed manually)` })
// addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

class MyToaster extends Toaster {
  renderToster = (props) => (
    <div id='toastsWrapper'>{ props.children }</div>
  );
  renderToast = ({ content, onClose, id }) => (
    <div className='toastWrapper' key={ id }>
      <div className='closeBtn' onClick={ onClose }> &#10008; </div>
      <div className='toastContent'>
        { content }
      </div>
    </div>
  );
}

const toaster = new MyToaster(document.getElementById( 'toasterRoot'))
toaster.addToast({ content: `${baseMsg} (shell be closed manually)` })
toaster.addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

ReactDOM.render(
  (<Toolbar addToast={ toaster.addToast }/>)
  , document.getElementById( 'appRoot' ))
  // , document.getElementsByTagName( 'div' )[0])
