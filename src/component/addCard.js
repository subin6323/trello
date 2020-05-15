import React, {Component} from 'react';
import { Input,Button,Select} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setData from '../action/setData'
import toggleModal from '../action/toggleModal'
const { Option } = Select;
const { TextArea } = Input;
class AddCardItem extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:this.props.name,
			description:this.props.description,
			label:this.props.label
		}
	}
	saveData(){
		console.log("this.props.list-->",this.props)
		let obj={
					name:this.state.name,
					description:this.state.description,
					label:this.state.label,
					list:this.props.list,
					position:this.props.data[this.props.list].length
			}
		if(this.props.modal.modalType=="add"){
			this.props.data[this.props.list].items.push(obj)
		}else{
			this.props.data[this.props.list].items.splice(this.props.position,1,obj)
		}
		this.props.setData(this.props.data)
		this.props.toggleModal(false,null)
	}
  render() {
    return (
      <div>
      	<h2>Add List Item</h2>
        <Input placeholder="Name"  value={this.state.name} onChange={(e) =>this.setState({name:e.target.value})}/>
        <Select
		    mode="multiple"
		    style={{ width: '100%' }}
		    placeholder="Select Label"
		    value={this.state.label}
		    onChange={(value) =>this.setState({label:value})}
		  >
		    <Option key="Critical">Critical</Option>
		    <Option key="High">High</Option>
		    <Option key="Medium">Medium</Option>
		    <Option key="Low">Low</Option>
		  </Select>
        <TextArea rows={4} placeholder="Enter the description" value={this.state.description} onChange={(e) =>this.setState({description:e.target.value})}/>
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
export default connect(mapStateToProps,matchDispatchToProps)(AddCardItem);
