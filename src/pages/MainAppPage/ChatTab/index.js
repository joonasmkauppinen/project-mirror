import ChatTab from './ChatTab';
import { connect } from 'react-redux';
import { loadMessages } from '../../../store/messages/actions';
import { pick } from 'lodash-es';

const mapDispatchToProps = {
  loadMessages,
};

function mapStateToProps(state) {
  return pick(state.messages, ['messages']);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatTab);
