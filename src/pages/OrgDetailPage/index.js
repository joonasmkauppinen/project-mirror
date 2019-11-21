import OrgDetailPage from './OrgDetailPage';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadEvents } from '../../store/events/actions';

function mapStateToProps(state) {
  return pick(state.events, ['events', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadEvents,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrgDetailPage);
