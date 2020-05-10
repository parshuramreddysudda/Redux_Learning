import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchUsers
} from  './Services/users.action';
import Users from './User'

const mapStateToProps = state => ({
  users: state.users.items,
  loading: state.users.loading,
  error: state.users.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers
}, dispatch);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;