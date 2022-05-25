// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Create a react component
const App = () => {
    return (
        <div>
            <label className="name" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>Submit</button>
        </div>
    );
};

// Take the react component and show it on the screen
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
