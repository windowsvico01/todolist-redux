const defaultState = {
  inputValue: '',
  list: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
      case 'change_input_value':
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
      case 'add_input_item':
        const newState2 = JSON.parse(JSON.stringify(state));
        newState2.list.push(action.value);
        newState2.inputValue = '';
        return newState2;
      default:
        return state;
    }
}