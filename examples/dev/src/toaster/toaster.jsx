import React from 'react'
import { Toaster } from '@kard/react-toaster'

class StyledToaster extends Toaster {

  renderToster = (props) => (
    <div id='toastsWrapper'>{ props.children }</div>
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
