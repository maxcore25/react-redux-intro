const defaultState = {
  clicks: 0,
  views: 0,
};

const ADD_CLICKS = 'ADD_CLICKS';

// action = { type: '', payload: '' }
export const clicksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CLICKS:
      return { ...state, clicks: state.clicks + action.payload };
    default:
      return state;
  }
};

export const addClicksAction = payload => ({ type: ADD_CLICKS, payload });
