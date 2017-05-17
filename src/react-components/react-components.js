import React from 'react'
import ReactDOM from 'react-dom'
import CausalityRedux from 'causality-redux'
import 'react-causality-redux'
import {Provider} from 'react-redux'

import {COUNTER_STATE, FIELD_STATE} from '../state-partitions/partitions.js'


const CounterForm = ({onIncrement, onDecrement, counter}) => (
    <div className='counter-form-button-container'>
        <div className='counter-text'>{'The current counter is ' + counter + '.'}</div>
        <button onClick={ (e) => onIncrement() }>Up</button>
        <button onClick={ (e) => onDecrement() }>Down</button>
    </div>
)
let CounterFormCausalityRedux = CausalityRedux.connectChangersAndStateToProps(CounterForm, COUNTER_STATE, ['onIncrement', 'onDecrement'], ['counter'],'CounterFormCausalityRedux');

//
// The onChangeField will result in a call to the business logic onChangeField above. Note there is no import dependency on the business logic with the react component.
// Then after the business logic corrects the user input, it sets the field "fieldValue" in the FIELD_STATE partition which will cause a render of the input field component.
// 
const EditField = ({fieldValue, onChangeField}) => (
                    <input type="text"
                           name="ID"
                           required="required"
                           value={ fieldValue }
                           placeholder="Name"
                           onChange={ (e) => onChangeField( e.target.value ) }
                    />
)
let EditFieldCausalityRedux = CausalityRedux.connectChangersAndStateToProps(EditField, FIELD_STATE, ['onChangeField'], ['fieldValue'], 'EditFieldCausalityRedux' );

ReactDOM.render(
    <Provider store={CausalityRedux.store}>
        <div>
            <CounterFormCausalityRedux/>
            <EditFieldCausalityRedux/>
        </div>
    </Provider>,
    document.getElementById('reactroot')
);