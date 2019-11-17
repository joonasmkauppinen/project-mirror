import PostList from './PostList';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadPosts } from '../../store/posts/actions';

function mapStateToProps(state) {
  return pick(state.posts, ['posts', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
