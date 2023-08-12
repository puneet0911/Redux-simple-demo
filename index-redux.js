const redux = require("redux");

const counterReducer = (state = {counter:0}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter:state.counter + 1
        };
    } else if (action.type === 'DECREMENT') {
        return {
            counter:state.counter - 1
        };
    } else {
        return {
            counter:state.counter
        };
    }
    
};
const store = redux.createStore(counterReducer);

const firstState = store.getState();
console.log("First State :-", firstState)

const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log("latestState :-", latestState)
}
// Adds a change listener. It will be called any time an action is dispatched,
store.subscribe(counterSubscriber);

// with this increase one counter current = 1 
store.dispatch({type:'INCREMENT'});

// with this increase one counter current = 2
store.dispatch({type:'INCREMENT'});


// with this increase one counter current = 3
store.dispatch({type:'DECREMENT'});
