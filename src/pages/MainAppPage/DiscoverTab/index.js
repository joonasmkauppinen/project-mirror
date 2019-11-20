import DiscoverTab from './DiscoverTab';
import { connect } from 'react-redux';
import { loadOrgs } from '../../../store/organizations/actions';
import { loadEvents } from '../../../store/events/actions';

const mapDispatchToProps = {
  loadOrgs,
  loadEvents,
};

export default connect(
  null,
  mapDispatchToProps,
)(DiscoverTab);
