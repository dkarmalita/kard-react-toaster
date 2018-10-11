import React from 'react'
import ReactDOM from 'react-dom'
import { guid } from './utils'

const createRoot = () => {
  const n =document.createElement('div')
  document.getElementsByTagName( 'body' )[0].appendChild(n)
  return n
}

export function Toaster(rootNode=null){

  const toasts = [] // { ref: ..., id: guid}
  const tosterRoot = !rootNode ? createRoot() : rootNode

  const createToast = (props, id) => ({
    id: id,
    ref: this.renderToast({ ...props, id, onClose: ()=>removeToast(id) }),
    // ref: ToastWrapper({ ...props, id, onClose: ()=>removeToast(id) }),
  })
  const renderToasts = (props) => toasts.map( toast=>toast.ref )
  const updateToaster = () => ReactDOM.render( this.renderToster({ children: renderToasts() }), tosterRoot)
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
