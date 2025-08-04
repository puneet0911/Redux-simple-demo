const { createStore } = require("redux");

// Reducer function to handle counter actions
const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

// Create Redux store with the reducer
const store = createStore(counterReducer);

// Log the initial state
console.log("Initial State:", store.getState());

// Subscriber function to log state updates
const counterSubscriber = () => {
    console.log("Updated State:", store.getState());
};

// Subscribe to store updates
const unsubscribe = store.subscribe(counterSubscriber);

// Dispatch actions to update the counter
store.dispatch({ type: 'INCREMENT' }); // counter: 1
store.dispatch({ type: 'INCREMENT' }); // counter: 2
store.dispatch({ type: 'DECREMENT' }); // counter: 1

// Optionally unsubscribe if no longer interested
