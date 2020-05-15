const defaultState= {
  data:{"To Do":{
  	name:"To Do",
  	items:[]
  }}
}
export default function (state=defaultState,action) {
	switch(action.type){
		case "SET_DATA":return {...state,data:{...action.data}};break
    	default:return state
	}
}



