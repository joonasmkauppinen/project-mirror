import OrgDetailPage from './OrgDetailPage';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadEvents } from '../../store/events/actions';
import { likeOrganization as likeOrg } from '../../store/organizations/actions';

function mapStateToProps(state) {
  return pick(state.events, ['events', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadEvents,
  likeOrg,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgDetailPage);
