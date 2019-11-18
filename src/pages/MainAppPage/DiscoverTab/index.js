import DiscoverTab from './DiscoverTab';
import { connect } from 'react-redux';
import { loadOrgs } from '../../../store/organizations/actions';

const mapDispatchToProps = {
  loadOrgs,
};

export default connect(
  null,
  mapDispatchToProps,
)(DiscoverTab);
