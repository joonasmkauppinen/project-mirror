import DiscoverTab from './DiscoverTab';
import { connect } from 'react-redux';
import { loadOrgs } from '../../../store/organizations/actions';
import { loadEvents } from '../../../store/events/actions';
import { pick } from 'lodash-es';

const mapDispatchToProps = {
  loadOrgs,
  loadEvents,
};

function mapStateToProps(state) {
  return pick(state.events, ['events', 'loading', 'error']);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiscoverTab);
