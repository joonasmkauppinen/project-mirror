import PostDetailPage from './PostDetailPage';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadPosts } from '../../store/posts/actions'; //

function mapStateToProps(state) {
  return pick(state.events, ['posts', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailPage);
