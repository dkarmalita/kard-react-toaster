import React from 'react'

export const ToastWrapper = ({ content, onClose, id }) => (
// &#10008; || &#10006;
  <div className='toastWrapper' key={ id }>
    <div className='closeBtn' onClick={ onClose }> &#10008; </div>
    <div className='toastContent'>
      { content }<br/>{ id }
    </div>
  </div>
)
