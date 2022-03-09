import React from "react";
import QuoteForm from "./features/quotes/QuoteForm";
import Quotes from "./features/quotes/Quotes";

function App() {
  return (
    <div className="container-fluid">
      <div
        className="row title justify-content-center"
        style={{ paddingTop: "12px" }}
      >
        <h1>Quote Maker</h1>
      </div>
    
      <QuoteForm/>
      <Quotes/>
    </div>
  );
}

export default App;
