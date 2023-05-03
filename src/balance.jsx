import React from "react";
import { connect } from "react-redux";

// Define a functional component called "Balance"
const Balance = ({ balance, dispatch }) => {
  // Define a state variable "amount" using the React.useState hook, initialized to 0
  const [amount, setAmount] = React.useState(0);

  // Define a function "handleChange" to update the "amount" state variable when the user enters a value in the input field
  const handleChange = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  // Define a function "handleDeposit" to deposit the entered amount if it is greater than 0
  const handleDeposit = () => {
    if (amount > 0) {
      // Dispatch a "DEPOSIT" action to the Redux store with the entered amount
      dispatch({ type: "DEPOSIT", amount: amount });
    }
    // Reset the "amount" state variable to 0
    setAmount(0);
  };

  // Define a function "handleWithdraw" to withdraw the entered amount if it is greater than 0
  const handleWithdraw = () => {
    if (amount > 0) {
      // Dispatch a "WITHDRAW" action to the Redux store with the entered amount
      dispatch({ type: "WITHDRAW", amount: amount });
    }
    // Reset the "amount" state variable to 0
    setAmount(0);
  };

  // Define a function "handleAddInterest" to add interest to the current balance
  const handleAddInterest = () => {
    // Dispatch an "ADD_INTEREST" action to the Redux store
    dispatch({ type: "ADD_INTEREST" });
  };

  // Define a function "handleCharges" to subtract charges from the current balance
  const handleCharges = () => {
    // Dispatch a "CHARGES" action to the Redux store
    dispatch({ type: "CHARGES" });
  };

  // Render the component
  return (
    <div>
      {/* Display the current balance */}
      <h1>Balance: {balance}</h1>
      {/* Display an input field where the user can enter an amount to deposit or withdraw */}
      <input type="number" value={amount} onChange={handleChange} />
      {/* Display buttons to trigger the corresponding actions */}
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleAddInterest}>Add Interest</button>
      <button onClick={handleCharges}>Charges</button>
    </div>
  );
};

// Define a function "mapStateToProps" to map the "balance" state from the Redux store to the "balance" prop of the component
const mapStateToProps = (state) => ({
  balance: state,
});

// Connect the "Balance" component to the Redux store using the "connect" function from the "react-redux" library
export default connect(mapStateToProps)(Balance);
