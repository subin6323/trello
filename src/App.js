import React, {Component} from 'react';
import Main from './container/main'
import Modal from './component/modal'
class SortableComponent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Main/>
        <Modal/>
      </div>
      )
  }
}
export default SortableComponent;
