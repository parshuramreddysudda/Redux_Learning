import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchUsers,resetUsers,updateUser,deleteUser,createUser
} from  './Services/users.action';
import Users from './User'

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
  updating: state.users.updating,
  error: state.users.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers:fetchUsers,
  createUser:createUser,
  resetUsers:resetUsers,
  updateUser:updateUser,
  deleteUser:deleteUser
}, dispatch);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;