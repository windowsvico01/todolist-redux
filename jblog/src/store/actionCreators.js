import { CHANGE_INPUT_VALUE, ADD_INPUT_ITEM, DELETE_ITEM } from './actionTypes'

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