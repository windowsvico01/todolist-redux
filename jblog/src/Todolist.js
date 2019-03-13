import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import { Input, Button, List } from 'antd';
import store from './store'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange = (e) => {
    e.preventDefault();
    const action = {
      type: 'change_input_value',
      value: e.target.value,
    }
    console.log(e.target.value);
    store.dispatch(action)
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
  handleAddItem = () => {
    const { inputValue } = this.state;
    const action = {
      type: 'add_input_item',
      value: inputValue,
    }
    store.dispatch(action);
  }
  render() {
      console.log(this.state);
      return <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <Input
          value={this.state.inputValue}
          placeholder='todo info'
          style={{ width: '300px' }}
          onChange={this.handleInputChange}
        />
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={this.handleAddItem}
        >提交</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
          style={{ width: '300px' }}
        />
      </div>
  }
}

export default TodoList;