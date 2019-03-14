import { CHANGE_INPUT_VALUE, ADD_INPUT_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
      case CHANGE_INPUT_VALUE:
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
      case ADD_INPUT_ITEM:
        const newState2 = JSON.parse(JSON.stringify(state));
        newState2.list.push(newState2.inputValue);
        newState2.inputValue = '';
        return newState2;
      case DELETE_ITEM:
        const newState3 = JSON.parse(JSON.stringify(state));
        newState3.list.splice(action.value, 1);
        return newState3;
      case INIT_LIST:
        const newState4 = JSON.parse(JSON.stringify(state));
        newState4.list = action.list;
        return newState4
      default:
        return state;
    }
}