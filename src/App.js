import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions/actionsCreators';

import Products from './pages/Products';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    order: state.order
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
