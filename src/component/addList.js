import React, {Component} from 'react';
import { Input,Button} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setData from '../action/setData'
import toggleModal from '../action/toggleModal'
class AddItem extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:""
		}
	}
	saveData(){
		this.props.data[this.state.name]={
			name:this.state.name,
  			items:[]
		}
		this.props.setData(this.props.data)
		this.props.toggleModal(false,null)
	}
  render() {
    return (
      <div>
      	<h2>Add List</h2>
        <Input placeholder="Enter the name of the List"  value={this.state.name} onChange={(e) =>this.setState({name:e.target.value})}/>
         <Button type="primary" block onClick={() =>this.saveData()}>SAVE</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {modal:state.modal,
  		 data:state.dataSource.data};
}
const matchDispatchToProps = (dispatch) =>{
  return bindActionCreators({setData:setData,toggleModal:toggleModal},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(AddItem);
