import CausalityRedux from 'causality-redux'

export const COUNTER_STATE = "Counter";
const reduxCounter = {
    partitionName: COUNTER_STATE,
    defaultState: {counter: 0},
    changerDefinitions: {
        'onIncrement':  { operation: CausalityRedux.operations.STATE_INCREMENT, impliedArguments: ['counter'] },
        'onDecrement':  { operation: CausalityRedux.operations.STATE_DECREMENT, impliedArguments: ['counter'] },
    }
}

export const FIELD_STATE = 'FIELD_STATE';
const reduxField = {
    partitionName: FIELD_STATE,
    defaultState: {fieldValue: ""},
    changerDefinitions: {
        'onChangeField': { operation: CausalityRedux.operations.STATE_FUNCTION_CALL},
        'setField': { arguments: ['fieldValue'] },
    }
}

CausalityRedux.addPartitions([reduxCounter, reduxField]);