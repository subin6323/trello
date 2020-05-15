const toggleModal = (status,component,modalType) =>{
	return{
		type:"TOGGLE_MODAL",
		status:status,
		component:component,
		modalType:modalType
	}
}
export default toggleModal;
