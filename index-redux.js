const { createStore } = require("redux");

// Reducer function to handle counter actions
function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

// Create Redux store with the reducer
const store = createStore(counterReducer);

// Log the initial state
console.log("Initial State:", store.getState());

// Subscribe to store updates and log state changes
const unsubscribe = store.subscribe(() => {
    console.log("Updated State:", store.getState());
});

// Helper functions for dispatching actions
const increment = () => store.dispatch({ type: 'INCREMENT' });
const decrement = () => store.dispatch({ type: 'DECREMENT' });

// Dispatch actions to update the counter
increment(); // counter: 1
increment(); // counter: 2
decrement(); // counter: 1

// Unsubscribe from store updates
