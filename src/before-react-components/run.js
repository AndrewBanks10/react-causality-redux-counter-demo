import CausalityRedux from 'causality-redux'

//
// The two functions below will disclose the causality chains.
//
function onStateChange(arg) {
    console.log('State Change: ' + arg.type);
    console.log(arg);
}

function onListener(arg) {
    console.log('Listener: ' +  arg.listenerName);
    console.log(arg);
}

CausalityRedux.createStore(undefined, undefined, undefined, {onStateChange, onListener});

