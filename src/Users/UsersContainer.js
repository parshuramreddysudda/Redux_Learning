import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchUsers,resetUsers,updateUser
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
  resetUsers:resetUsers,
  updateUser:updateUser
}, dispatch);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;