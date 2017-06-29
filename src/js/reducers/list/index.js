import {
  FETCH_MESSAGES_SUCCESS,
  SAVE_MESSAGES_SUCCESS,
} from '../../actions/messages';

const initialState = {
  messages: [],
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      };

    case SAVE_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload,
      };
    }

    default:
      return state;
  }
};

export default list;
