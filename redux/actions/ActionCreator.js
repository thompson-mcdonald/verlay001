import {OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU, OPEN_MODAL, CLOSE_MODAL } from "./ActionConstants";

export const openMobileMenuAction = data => {
   return {
       type: OPEN_MOBILE_MENU,
       payload: data
   };
};

export const closeMobileMenuAction = data => {
   return {
       type: CLOSE_MOBILE_MENU,
       payload: data
   };
};

export const openModalAction = data => {
    return {
        type: OPEN_MODAL,
        payload: data
    };
 };

export const closeModalAction = data => {
    return {
        type: CLOSE_MODAL,
        payload: data
    };
 };

