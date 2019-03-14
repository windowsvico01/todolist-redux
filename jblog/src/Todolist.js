import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import { getInputChange, getAddInputItem, getDeleteItem } from './store/actionCreators'
import store from './store'
import ToDoListUI from './ToDoListUI';
import axios from 'axios';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    axios.get('./list.json').then(() => {
      console.log(11111);
    })
  }
  handleInputChange = (e) => {
    e.preventDefault();
    const action = getInputChange(e.target.value);
    store.dispatch(action)
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
  handleAddItem = () => {
    const action = getAddInputItem();
    store.dispatch(action);
  }
  handleDeleteItem = (index) => {
    const action = getDeleteItem(index);
    store.dispatch(action);
  }
  render() {
      return <ToDoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleAddItem = {this.handleAddItem}
        handleDeleteItem = {this.handleDeleteItem}
      />
  }
}

export default TodoList;