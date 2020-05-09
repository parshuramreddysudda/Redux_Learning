import {createStore} from 'redux'
import reducer from '../reducers/Index'

const InitialState={option:" ",money:100000,action:"No Action"}
const store=createStore(reducer,InitialState)
export default store;
