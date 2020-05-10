const initialState={
    items:[],
    loading:false,
    error:null
}

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
    
    case 'FETCH_USERS_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_USERS_COMPLETED':
      return {
        ...state,
        loading: false
      };
  
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        items: action.payload
      };
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'RESET_USERS':
      return{
        ...state,
        items:[]
      }
    default:
      return state;
    }

}
export default usersReducer;