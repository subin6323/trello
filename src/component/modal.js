import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleModal from '../action/toggleModal'
class CustomModal extends React.Component {
 
  render() {
    return (
      <div>
        <Modal
          visible={this.props.modal.status}
          onCancel={() =>this.props.toggleModal(false,null)}
          footer={null}
        >
          {this.props.modal.component}
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {modal:state.modal};
}
const matchDispatchToProps = (dispatch) =>{
  return bindActionCreators({toggleModal:toggleModal},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(CustomModal);
