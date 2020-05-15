import { combineReducers } from 'redux';
import setData from './reducer/setData'
import modal from './reducer/toggleModal'
export default combineReducers({
  dataSource:setData,
  modal:modal
})