import React, { Component, Context } from 'react'

import { MainLayout } from 'layouts'
import { Toolbar } from 'blocks'

import { Provider as StateProvider, connect, getStore } from './store'
import { toaster } from './toaster'

import { AppContextProvider } from 'appContext'

const baseMsg = '"Hello World" - auto-created text toast'

toaster.addToast({ content: `${baseMsg} (shell be closed manually)` })
toaster.addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

export class App extends Component {
  render(){
    return (
      <StateProvider>
        <MainLayout>
          <Toolbar addToast={ toaster.addToast } />
        </MainLayout>
      </StateProvider>
    )
  }
}

