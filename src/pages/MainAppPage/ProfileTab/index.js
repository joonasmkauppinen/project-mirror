import ProfileTab from './ProfileTab';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadGauges } from '../../../store/gauges/actions';
import { loadUser } from '../../../store/user/actions';

function mapStateToProps(state) {
  const props = pick(state.gauges, ['gauges', 'loading', 'error']);
  props.user = pick(state.user, ['user']);
  return props;
}

const mapDispatchToProps = {
  loadGauges,
  loadUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileTab);
