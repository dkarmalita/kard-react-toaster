import React from 'react'
import ReactDOM from 'react-dom'
import { guid } from './utils'

const toasts = [] // { ref: ..., id: guid}
var ToastWrapper = () => null
var tosterRoot = null

const createToast = (props, id) => ({
  id: id,
  ref: ToastWrapper({ ...props, id, onClose: ()=>removeToast(id) }),
})
const renderToasts = (props) => toasts.map( toast=>toast.ref )
const renderToster = (props) => (<div id='toastsWrapper'>{ renderToasts() }</div>)
const updateToaster = () => ReactDOM.render( renderToster(), tosterRoot)

export function initToaster(TWrapper, rootNode=null){
  ToastWrapper = TWrapper
  tosterRoot = !rootNode ? document.createElement('div') : rootNode;
  document.getElementsByTagName( 'body' )[0].appendChild(tosterRoot)
}

/*
  The known properties are 'content' and 'timeout' for now.
  The both, text or jsx, are allowed as content here.
  `timeout` is a time (in ms) before the toast auto-removing.
*/
export function addToast(props){
  const id = guid();
  toasts.push( createToast({ content: props && props.content }, id) )
  updateToaster()
  props && props.timeout && setTimeout( ()=>removeToast(id), props.timeout )
  return id;
}

export const removeToast = (id) => {
  for (var i = toasts.length - 1; i >= 0; i--) {
    if(toasts[i].id === id){
      toasts.splice(i, 1);
      updateToaster();
      break;
    }
  }
}
