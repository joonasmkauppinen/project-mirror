import History from './History';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';

function mapStateToProps(state) {
  return pick(state.history, ['loading', 'error']);
}

export default connect(mapStateToProps)(History);
