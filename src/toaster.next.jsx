function Toaster(){

    const toasts = []

    function addToast(props){
      const id = guid();
      toasts.push( createToast({ content: props && props.content }, id) )
      updateToaster()
      props && props.timeout && setTimeout( ()=>removeToast(id), props.timeout )
      return id;
    }
}
