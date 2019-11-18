import ProfileCard from './ProfileCard';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadUser } from '../../store/user/actions';

function mapStateToProps(state) {
  return pick(state.user, ['user', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileCard);
