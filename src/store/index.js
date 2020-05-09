import {createStore} from 'redux'
import reducer from '../reducers/Index'

const InitialState={tech:"React"}
const store=createStore(reducer,InitialState)
export default store;
