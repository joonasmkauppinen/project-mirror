import HomeTab from './HomeTab';
import { connect } from 'react-redux';
import { loadPosts } from '../../../store/posts/actions';
import { loadTasks } from '../../../store/tasks/actions';
import { loadOrgs } from '../../../store/organizations/actions';

const mapDispatchToProps = {
  loadPosts,
  loadTasks,
  loadOrgs,
};

export default connect(
  null,
  mapDispatchToProps,
)(HomeTab);
