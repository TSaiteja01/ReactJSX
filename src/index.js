// Import the React and ReactDOM libraries
import React from "react";
import ReactDom from "react-dom";

//  Create a react component
const App = () => {
  const ButtonText = { text: "click Me!" };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "Blue", color: "white" }}>
        {ButtonText.text}
      </button>
    </div>
  );
};
// Take the react component an show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
