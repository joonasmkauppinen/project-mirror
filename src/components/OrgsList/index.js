import OrgsList from './OrgsList';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import {
  likeOrganization as likeOrg,
  loadOrgs,
} from '../../store/organizations/actions';

function mapStateToProps(state) {
  return pick(state.organizations, ['organizations', 'loading', 'error']);
}

const mapDispatchToProps = {
  likeOrg,
  loadOrgs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgsList);
