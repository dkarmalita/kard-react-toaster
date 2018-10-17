import React from 'react'
import { Toaster } from '@kard/react-toaster'

const config = {
  left45: true,
}

const getContainerStyles = () => {
  let result = 'toastsContainer'
  if( config.left45 ){ result += ' toastsContainer__left45' }
  return result
}

class StyledToaster extends Toaster {

  renderToster = (props) => (
    <div className={ getContainerStyles() }>{ props.children }</div>
  );

  renderToast = ({ content, onClose, id }) => (
    // &#10008; || &#10006;
    <div className='toastWrapper' key={ id }>
      <div className='closeBtn' onClick={ onClose }> &#10008; </div>
      <div className='toastContent'>
        { content }
      </div>
    </div>
  );
}

export const toaster = new StyledToaster(document.getElementById( 'toasterRoot'))
