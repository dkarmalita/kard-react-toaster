import { DataStore } from '@kard/react-store'
import initialState from './initialState'

const store = new DataStore(initialState)
const { Provider, connect } = store
const getStore = ()=>store

export { Provider, connect, getStore }
