import PostList from './PostList';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';

function mapStateToProps(state) {
  const newState = pick(state.posts, ['posts', 'loading', 'error']);
  newState.orgs = state.organizations.organizations;
  return newState;
}

export default connect(mapStateToProps)(PostList);
