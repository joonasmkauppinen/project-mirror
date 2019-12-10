import MessageList from './MessageList';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';

function mapStateToProps(state) {
  return pick(state.messages, ['loading', 'error']);
}

export default connect(mapStateToProps)(MessageList);
