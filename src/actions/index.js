import * as Actions from '../constants/actionTypes';

export const openModal = (id) => ({
    type: Actions.OPEN_MODAL,
    id
})

export const closeModal = (id) => ({
    type: Actions.CLOSE_MODAL,
    id
})