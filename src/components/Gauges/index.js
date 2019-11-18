import Gauge from './Gauge';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { loadGauges } from '../../store/gauges/actions';

function mapStateToProps(state) {
  return pick(state.gauges, ['gauges', 'loading', 'error']);
}

const mapDispatchToProps = {
  loadGauges,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gauge);
