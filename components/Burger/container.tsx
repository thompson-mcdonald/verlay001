import { connect } from "react-redux";
import { openMobileMenuAction, closeMobileMenuAction } from '../../redux/actions/ActionCreator'

import Burger from "./index";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    state
  }
};


const mapDispatchToProps = dispatch => {
    return {
      dispatch_openMobileMenu: () => dispatch(openMobileMenuAction(true)),
      dispatch_closeMobileMenu: () => dispatch(closeMobileMenuAction(false))
   }
}

const BurgerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Burger);

export default BurgerContainer;
