import { connect } from "react-redux";
import { openMobileMenuAction, closeMobileMenuAction, openModalAction, closeModalAction } from '../../redux/actions/ActionCreator'

import MobileMenu from "./index";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    state
  }
};

const mapDispatchToProps = dispatch => {
    return {
      dispatch_openMobileMenu: () => dispatch(openMobileMenuAction(true)),
      dispatch_closeMobileMenu: () => dispatch(closeMobileMenuAction(false)),
      dispatch_openModal: () => dispatch(openModalAction(true)),
      dispatch_closeMobileMenuOpenModal: () => {
          dispatch(closeMobileMenuAction(false));
          dispatch(openModalAction(true));
      },
      dispatch_closeMobileMenuCloseModal: () => {
          dispatch(closeMobileMenuAction(false));
          dispatch(closeModalAction(false));
      }
   }
};

const MobileMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu);

export default MobileMenuContainer;