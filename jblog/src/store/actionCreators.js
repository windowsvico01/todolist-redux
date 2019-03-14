import { CHANGE_INPUT_VALUE, ADD_INPUT_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios';
export const getInputChange = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const getAddInputItem = () => ({
    type: ADD_INPUT_ITEM,
})

export const getDeleteItem = (index) => ({
    type:DELETE_ITEM,
    index,
})

export const getInitList = (list) => ({
    type:INIT_LIST,
    list,
})

export const getTodoList = () => {
    return (dispatch) => { // 这里很重要
        axios.get('./list.json').then((res) => {
            const action = getInitList(res.data);
            dispatch(action);
        })
    }
}