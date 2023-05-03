import { createStore } from "redux";

// This function is a Redux reducer that manages the state of the balance
const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case "DEPOSIT":
      // If the action is a DEPOSIT, add the amount to the current state and return the new state
      return state + action.amount;
    case "WITHDRAW":
      // If the action is a WITHDRAW, subtract the amount from the current state and return the new state
      return state - action.amount;
    case "ADD_INTEREST":
      // If the action is an ADD_INTEREST, multiply the current state by 1.05 (i.e., add 5% interest) and return the new state
      return state * 1.05;
    case "CHARGES":
      // If the action is a CHARGES, multiply the current state by 0.85 (i.e., subtract a 15% charge) and return the new state
      return state * 0.85;
    default:
      // If the action is not recognized, return the current state unchanged
      return state;
  }
};

// Create a new Redux store using the balanceReducer as the reducer function
const store = createStore(balanceReducer);

// Export the store so it can be used by other parts of the application
export default store;
