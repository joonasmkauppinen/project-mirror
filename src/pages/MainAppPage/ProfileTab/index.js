import ProfileTab from './ProfileTab';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadGauges } from '../../../store/gauges/actions';
import { loadUser } from '../../../store/user/actions';
import { loadHistory } from '../../../store/history/actions';

function mapStateToProps(state) {
  const props = pick(state.gauges, ['gauges', 'loading', 'error']);
  props.user = pick(state.user, ['user']);
  props.userHistory = pick(state.history, ['history']).history;
  return props;
}

const mapDispatchToProps = {
  loadGauges,
  loadUser,
  loadHistory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileTab);
