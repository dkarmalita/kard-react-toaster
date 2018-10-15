import React, { Component, Context } from 'react'

const AppContext = React.createContext( null )
// Note: createContext takes the default context state
// used while the component in placed outside the context

export class AppContextProvider extends Component {
  state={}
  render(){
    const store = { getState: ()=>this.state, setState: this.setState }
    const appContext = { store }
    return (
      <AppContext.Provider value={ appContext }>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const withAppContext = AComponent =>
class extends Component {
  render(){
    return (
      <AppContext.Consumer>
        { appContext => <AComponent {...this.props} appContext={appContext} /> }
      </AppContext.Consumer>
    )
  }
}
