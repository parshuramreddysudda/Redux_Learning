const initialState = {
  items: [],
  loading: false,
  error: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

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
      return {
        ...state,
        items: []
      }
    case 'UPDATE_USER_PENDING':
      return {
        ...state,
        updating: true
      };
    case 'UPDATE_USER_COMPLETED':
      return {
        ...state,
        updating: false
      };
    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        error: action.payload
      };

    case 'UPDATE_USER_SUCCESS':
      let updatingUser = action.payload.updateUser;
      let updatingUserID = action.payload.id;
      return {
        ...state,
        items:
          [...state.items.filter(user => user.id !== updatingUserID),
          ...state.items.filter(user => user.id === updatingUserID).map(user => updatingUser)]
      }
    case 'DELETE_USERS_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'DELETE_USERS_COMPLETED':
      return {
        ...state,
        loading: false
      };

    case 'DELETE_USERS_SUCCESS':
      let deleteUserID = action.payload
      return {
        ...state,
        items: [...state.items.filter(user => user.id !== deleteUserID)]
      };

    case 'DELETE_USERS_ERROR':
      return {
        ...state,
        error: action.payload
      };
      case 'CREATE_USERS_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'CREATE_USERS_COMPLETED':
      return {
        ...state,
        loading: false
      };

    case 'CREATE_USERS_SUCCESS':
      return {
        ...state,
        items: [...state.items,action.payload.params]
      };

    case 'CREATE_USERS_ERROR':
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }

}
export default usersReducer;