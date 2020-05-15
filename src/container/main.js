import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { Button } from 'antd';
import setData from '../action/setData'
import toggleModal from '../action/toggleModal'
import AddList from '../component/addList'
import AddListItem from '../component/addCard'
import EachCardItem from '../component/eachCardItem'

const SortableItem = SortableElement(({value}) => <EachCardItem {...value}/>)
const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});
 
class SortableComponent extends Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  sortData(oldIndex, newIndex,list){
  	let newList=arrayMove(this.props.data[list].items, oldIndex.oldIndex, oldIndex.newIndex);
  	newList.forEach((item,index) =>item.position=index)
  	this.props.data[list].items=newList;
  	this.props.setData(this.props.data)
  }
  toggleAddModal(){
  	this.props.toggleModal(true,<AddList/>,"add")
  }
  addNewCard(items){
  	this.props.toggleModal(true,<AddListItem list={items.name}/>,"add")
  }
  render() {
    return (<div>
    		 <Button type="primary" onClick={() =>this.toggleAddModal()}>+ Add List</Button>
    		 {Object.values(this.props.data).map((items) =>{
    		 	return(<div>
    		 				<h2>{items.name}</h2>
    		 				<SortableList items={items.items} onSortEnd={(oldIndex, newIndex) =>this.sortData(oldIndex, newIndex,items.name)} />
    		 				<a onClick={() =>this.addNewCard(items)}>+Add New Dard</a>
    		 		   </div>
    		 		   )
    		 })}
           </div>);
  }
}
const mapStateToProps = (state) =>{
  return {data:state.dataSource.data};
}
const matchDispatchToProps = (dispatch) =>{
  return bindActionCreators({setData:setData,toggleModal:toggleModal},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(SortableComponent);

