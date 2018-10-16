## Description

The `@kard/react-toaster` is an extremely lightweight toaster for React applications. It contains no markup or styles but the only engine allows to create, place and remove (manually and by time-out) the toast messages.

## How to install

**from npm repository**
```sh
npm add @kard/react-toaster
```

**from github page**
```sh
npm add https://github.com/dkarmalita/kard-react-toaster.git
```

## How to use

**create a toaster with styles**
```jsx
import { Toaster } from '@kard/react-toaster'
import './StyledToaster.css'

class StyledToaster extends Toaster {

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

export const toaster = new StyledToaster(
  document.getElementById( 'toasterRoot')
)
```

**create some toast template**
```jsx
import React from 'react'
import './Toast.css'

export const Toast = ({ children, type }) => (
  <div className={type}>
    { children }
  </div>
)
```

**use the toaster in the code**
```jsx
import React from 'react'
import { toaster } from 'src/toaster'
import { Toast } from 'src/toaster'

const { addToast } = toaster

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
```
