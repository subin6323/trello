import { Card,Tag } from 'antd';
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleModal from '../action/toggleModal'
import AddListItem from '../component/addCard'
const cardItem = (props) =>{
	console.log(props)
	return(<Card style={{ width: 200 }}>
				<h2>{props.name}</h2>
				<p>{props.description}</p>
				{props.label.map((items) =>{
					return(<Tag color="#f50">{items}</Tag>)
				})}
				<a onClick={() =>props.toggleModal(true,<AddListItem {...props}/>,"edit")}>Edit</a>
		    </Card>)
}

const mapStateToProps = (state) =>{
  return {data:state.dataSource.data};
}
const matchDispatchToProps = (dispatch) =>{
  return bindActionCreators({toggleModal:toggleModal},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(cardItem);