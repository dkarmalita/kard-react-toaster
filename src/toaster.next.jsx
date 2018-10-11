import React from 'react'
import ReactDOM from 'react-dom'
import { guid } from './utils'

const createRoot = () => {
  const n =document.createElement('div')
  document.getElementsByTagName( 'body' )[0].appendChild(n)
  return n
}

export function Toaster(ToastWrapper, rootNode=null){

  const toasts = [] // { ref: ..., id: guid}
  const tosterRoot = !rootNode ? createRoot() : rootNode

  const createToast = (props, id) => ({
    id: id,
    ref: ToastWrapper({ ...props, id, onClose: ()=>removeToast(id) }),
  })
  const renderToasts = (props) => toasts.map( toast=>toast.ref )
  const renderToster = (props) => (<div id='toastsWrapper'>{ renderToasts() }</div>)
  const updateToaster = () => ReactDOM.render( renderToster(), tosterRoot)
  const removeToast = (id) => {
    for (var i = toasts.length - 1; i >= 0; i--) {
      if(toasts[i].id === id){
        toasts.splice(i, 1);
        updateToaster();
        break;
      }
    }
  }

  /*
    The known properties are 'content' and 'timeout' for now.
    The both, text or jsx, are allowed as content here.
    `timeout` is a time (in ms) before the toast auto-removing.
  */
  this.addToast = (props) => {
    const id = guid();
    toasts.push( createToast({ content: props && props.content }, id) )
    updateToaster()
    props && props.timeout && setTimeout( ()=>removeToast(id), props.timeout )
    return id;
  }

}
