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

export const fetchUsers = (params) => (dispatch) => {

  dispatch(fetchUsersPending());

  return axios.get('http://0.0.0.0:4010/api/users', {params: params})
    .then(fetchUsersResponce => {

      // const devices = DevicesHelper.formatDevices(fetchUsersResponce);
      dispatch(fetchUsersSuccess(fetchUsersResponce.data));
    })
    .catch(error => dispatch(fetchUsersError(error)))
    .finally(() => dispatch(fetchUsersCompleted()));
};