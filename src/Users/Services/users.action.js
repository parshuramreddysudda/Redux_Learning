import axios from 'axios'

export const fetchUsersPending = () => ({
  type: 'FETCH_USERS_PENDING'
});

export const fetchUsersCompleted = () => ({
  type: 'FETCH_USERS_COMPLETED'
});

export const fetchUsersSuccess = (devices) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: devices
});
export const fetchUsersError = (error) => ({
  type: 'FETCH_USERS_ERROR',
  payload: error
});
export const updateUserPending = () => ({
  type: 'UPDATE_USERS_PENDING'
});
export const updateUserCompleted = () => ({
  type: 'UPDATE_USERS_COMPLETED'
});
export const updateUserSuccess = (updateUser, id) => ({
  type: 'UPDATE_USERS_SUCCESS',
  payload: { updateUser, id }

});
export const updateUserError = (error) => ({
  type: 'UPDATE_USER_ERROR',
  payload: error
});
export const deleteUserPending = () => ({
  type: 'DELETE_USERS_PENDING'
});

export const deleteUserCompleted = () => ({
  type: 'DELETE_USERS_COMPLETED'
});

export const deleteUserSuccess = (id) => ({
  type: 'DELETE_USERS_SUCCESS',
  payload: id
});
export const deleteUserError = (error) => ({
  type: 'DELETE_USERS_ERROR',
  payload: error
});

export const createUserPending = () => ({
  type: 'CREATE_USERS_PENDING'
});

export const createUserCompleted = () => ({
  type: 'CREATE_USERS_COMPLETED'
});

export const createUserSuccess = (params) => ({
  type: 'CREATE_USERS_SUCCESS',
  payload: {params}
});
export const createUserError = (error) => ({
  type: 'CREATE_USERS_ERROR',
  payload: error
});
export const resetUsers = () => ({
  type: 'RESET_USERS'
});

export const fetchUsers = (params) => (dispatch) => {

  dispatch(fetchUsersPending());

  return axios.get('http://0.0.0.0:4010/api/users', { params: params })
    .then(fetchUsersResponce => {

      // const devices = DevicesHelper.formatDevices(fetchUsersResponce);
      dispatch(fetchUsersSuccess(fetchUsersResponce.data));
    })
    .catch(error => dispatch(fetchUsersError(error)))
    .finally(() => dispatch(fetchUsersCompleted()));
};

export const updateUser = (params, id) => (dispatch) => {

  dispatch(updateUserPending());
  const reqParams = `${params.id}&name=${params.name}&state=${params.state}&created=${params.created}&updated=${params.updated}&type=${params.type}`
  return axios.put(`http://0.0.0.0:4010/api/users/${id}?=${reqParams}`)
    .then(updateUserResponce => {

      // const devices = DevicesHelper.formatDevices(updateUserResponce);
      dispatch(updateUserSuccess(updateUserResponce.data, id));
    })
    .catch(error => dispatch(updateUserError(error)))
    .finally(() => dispatch(updateUserCompleted()));
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(deleteUserPending());

  return axios.delete(`http://0.0.0.0:4010/api/users/${id}`)
    .then(deleteUserResponce => {

      // const devices = DevicesHelper.formatDevices(deleteUserResponce);
      dispatch(deleteUserSuccess(id));
    })
    .catch(error => dispatch(deleteUserError(error)))
    .finally(() => dispatch(deleteUserCompleted()));
};

export const createUser = (params) => (dispatch) => {
  dispatch(createUserPending());
  const reqParams = `id=${params.id}&name=${params.name}&state=${params.state}&created=${params.created}&updated=${params.updated}&type=${params.type}`
  return axios.put(`http://0.0.0.0:4010/api/users/${params.id}?=${reqParams}`)
    .then(createUserResponce => {
      // const devices = DevicesHelper.formatDevices(createUserResponce);
      dispatch(createUserSuccess(params));
    })
    .catch(error => dispatch(createUserError(error)))
    .finally(() => dispatch(createUserCompleted()));
};

