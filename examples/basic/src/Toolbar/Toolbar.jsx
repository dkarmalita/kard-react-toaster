import React from 'react'
import { Toast } from 'src/toaster'

export const Toolbar = ({ addToast }) => (
  <div className='Toolbar'>
    <button onClick={()=>addToast({ content:
        'New text toast which has to be closed manually.'
    })}>Text toast</button>
    <button onClick={()=>addToast({ content:
        'This toast will be closed automatically in 2 seconds.'
        ,timeout: 2000
    })}>'Ok' toast for 2sec</button>
    <button onClick={()=>addToast({ content:
        <Toast type='Toast__ok'>
            'This toast will be closed automatically in 2 seconds.'
        </Toast>
        // ,timeout: 2000
    })}>'Ok' toast for 2sec</button>
    <button onClick={()=>addToast({ content:
        <Toast type='Toast__warn'>
            'This toast will be closed automatically in 2 seconds.'
        </Toast>
        // ,timeout: 2000
    })}>'Warn' toast for 2sec</button>
    <button onClick={()=>addToast({ content:
        <Toast type='Toast__err'>
            'This toast will be closed automatically in 2 seconds.'
        </Toast>
        // ,timeout: 2000
    })}>'Err' toast for 2sec</button>
  </div>
)
