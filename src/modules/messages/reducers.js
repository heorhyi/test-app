import { handleActions } from 'redux-actions';
import { addMessage, removeMessage } from './actions';

export const initialState = {
  messages: [],
};

export const reducer = handleActions(
  {
    [addMessage]: (state, { payload }) => ({
      ...state,
      messages: [{ id: String(Date.now()), ...payload }, ...state.messages],
    }),

    [removeMessage]: (state, { payload }) => ({
      ...state,
      messages: [...state.messages.filter((item) => item.id !== payload.id)],
    }),
  },
  initialState,
);
