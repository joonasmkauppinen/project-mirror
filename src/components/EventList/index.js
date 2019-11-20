import EventList from './EventList';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';

function mapStateToProps(state) {
  return pick(state.events, ['events', 'loading', 'error']);
}

export default connect(mapStateToProps)(EventList);
