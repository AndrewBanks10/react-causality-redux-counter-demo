import CausalityRedux from 'causality-redux'
import {COUNTER_STATE, FIELD_STATE} from '../state-partitions/partitions.js'

(function() {
    function init() {
        var fieldState = CausalityRedux.store[FIELD_STATE];
        console.log(CausalityRedux);
                console.log(CausalityRedux.store);
        function onChangeField(arg) {
            var x = /^[a-zA-Z\s]*/.exec(arg);
            if ( x == null )
                var fieldValue = "";
            else
                var fieldValue = x[0];
            // Set the fieldValue in the state partition. This will automatically trigger a render of the EditField react component so that the user sees the correct value.
            fieldState.setField(fieldValue);
        }
        // Listen for function calls from 'onChangeField' changer.
        fieldState.subscribe(onChangeField, ['onChangeField'], 'onChangeField');
    }
    CausalityRedux.onStoreCreated(init);
})();