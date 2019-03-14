import React from 'react';
import { Input, Button, List } from 'antd';

const ToDoListUI = (props) => {
    return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <Input
            value={props.inputValue}
            placeholder='todo info'
            style={{ width: '300px' }}
            onChange={props.handleInputChange}
        />
        <Button
            type="primary"
            style={{ marginLeft: '10px' }}
            onClick={props.handleAddItem}
        >提交</Button>
        <List
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item onClick={() => props.handleDeleteItem(index)}>{item}</List.Item>)}
            style={{ width: '300px' }}
        />
    </div>
    )

}

export default ToDoListUI;