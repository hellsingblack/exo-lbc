import { clone } from 'lodash';
import messages from '../data/messages';

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';

export const fetchMessages = () => dispatch => {
  return dispatch({
    type: FETCH_MESSAGES_SUCCESS,
    payload: messages,
  });
}

export const SAVE_MESSAGES_SUCCESS = 'SAVE_MESSAGES_SUCCESS';

export const saveMessage = ({ message = '', isPrivate = false }) => (dispatch, getState) => {

  const { messages } = getState().list;
  const newList = clone(messages);
  
  newList.push({ text: message, isPrivate });
  
  return dispatch({
    type: SAVE_MESSAGES_SUCCESS,
    payload : newList,
  });
}
