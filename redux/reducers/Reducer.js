import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU, OPEN_MODAL, CLOSE_MODAL, CLOSE_MOBILE_MENU_OPEN_MODAL } from '../actions/ActionConstants';

const reducerSwitch = (state = { open: false, modalVisible: false }, action) => {
    switch (action.type) {
        case OPEN_MOBILE_MENU:
            return {...state, open: true};
        case CLOSE_MOBILE_MENU:
            return {...state, open: false};
        case OPEN_MODAL:
            return {...state, modalVisible: true};
        case CLOSE_MODAL:
            return {...state, modalVisible: false};
        default:
            return {...state};
    }
};

export default reducerSwitch;
