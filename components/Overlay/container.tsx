import { connect } from "react-redux";
import { openMobileMenuAction, closeMobileMenuAction } from '../../redux/actions/ActionCreator'

import Overlay from "./index";

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

const OverlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overlay);

export default OverlayContainer;