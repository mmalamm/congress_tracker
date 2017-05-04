import { connect } from 'react-redux';
import StateButtons from './state_buttons';

import { fetchSenators } from '../actions/state_button_actions';

const mapStateToProps = state => ({
  senators: []
});

const mapDispatchToProps = dispatch => ({
  requestSenators: () => dispatch(fetchSenators())
});

export default connect(mapStateToProps, mapDispatchToProps)(StateButtons);
