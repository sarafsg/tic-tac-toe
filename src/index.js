import React from "react"; 
import ReactDOM from "react-dom/client"; 
import "./index.css"; 
import App from "./App"; 

// Creating a root container for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root")); 

// Rendering the React app inside the 'root' element
root.render( 
  // Enables additional checks and warnings in development
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>
);
