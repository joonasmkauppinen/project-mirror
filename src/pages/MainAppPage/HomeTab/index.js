import HomeTab from './HomeTab';
import { connect } from 'react-redux';
import { loadPosts } from '../../../store/posts/actions';
import { loadTasks } from '../../../store/tasks/actions';

const mapDispatchToProps = {
  loadPosts,
  loadTasks,
};

export default connect(
  null,
  mapDispatchToProps,
)(HomeTab);
