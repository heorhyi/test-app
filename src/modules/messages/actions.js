import { createAction } from 'redux-actions';

const PREFIX = 'MESSAGES';

export const addMessage = createAction(`${PREFIX}/ADD_MESSAGE`);
export const removeMessage = createAction(`${PREFIX}/REMOVE_MESSAGE`);
