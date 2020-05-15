const defaultState= {
  status:false,
  component:null,
  modalType:"add"
}
export default function (state=defaultState,action) {
	switch(action.type){
		case "TOGGLE_MODAL":return {...state,status:action.status,component:action.component,modalType:action.modalType};break
    	default:return state
	}
}



