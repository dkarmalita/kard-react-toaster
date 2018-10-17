import React, { Component, Context } from 'react'
import { MainLayout } from 'layouts'
import { Toolbar } from 'blocks'
import { toaster } from './toaster'

import { AppContextProvider } from 'appContext'

const baseMsg = '"Hello World" - auto-created text toast'

toaster.addToast({ content: `${baseMsg} (shell be closed manually)` })
toaster.addToast({ content: `${baseMsg} with 4secs of timeout (can be closed manually)`, timeout: 4000  })

export class App extends Component {
  state = {};
  render(){
    return (
      <MainLayout
        getState={ () => this.state }
        update={ this.setState }
      >
        <Toolbar addToast={ toaster.addToast } />
      </MainLayout>
    )
  }
}

