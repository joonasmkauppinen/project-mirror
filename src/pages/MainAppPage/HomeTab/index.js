import HomeTab from './HomeTab';
import { connect } from 'react-redux';
import { loadPosts } from '../../../store/posts/actions';
import { loadTasks } from '../../../store/tasks/actions';
import { loadOrgs } from '../../../store/organizations/actions';
import { loadUser } from '../../../store/user/actions';
import { pick } from 'lodash-es';

const mapDispatchToProps = {
  loadPosts,
  loadTasks,
  loadOrgs,
  loadUser,
};

function mapStateToProps(state) {
  return pick(state.user, ['user', 'loading', 'error']);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTab);
