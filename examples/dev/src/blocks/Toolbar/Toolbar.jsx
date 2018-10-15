import React from 'react'
import { Toast } from 'src/toaster'

export const Toolbar = ({ addToast }) => (

  <div className='Toolbar'>
    <button onClick={()=>addToast({ content:
        'New text toast which has to be closed manually.'
    })}>Text toast</button>

    <button onClick={()=>addToast({ content:
        'This toast which will be closed automatically in 2 seconds.'
        ,timeout: 2000
    })}>Text toast for 2sec</button>

    <button onClick={()=>addToast({ content:
        <Toast type='Toast__ok'>
          Some 'Okay' notification. Will be automatically closed after 4 seconds.
        </Toast>
        ,timeout: 4000
    })}>'Ok' toast</button>

    <button onClick={()=>addToast({ content:
        <Toast type='Toast__warn'>
          Some warning message here. Will be automatically closed after 6 seconds.
        </Toast>
        ,timeout: 6000
    })}>'Warn' toast</button>

    <button onClick={()=>addToast({ content:
        <Toast type='Toast__err'>
          Some error message here. Will be newer automatically closed. Close it manually.
        </Toast>
        // ,timeout: 2000
    })}>'Err' toast</button>
  </div>
)
