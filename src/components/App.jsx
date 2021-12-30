import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  const [printedName, setPrintedName] = useState("");

  function changePrintedName(e) {
    setPrintedName(name);

    //Prevents from from refreshing at each submit
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {printedName}</h1>
      <form onSubmit={changePrintedName}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={changeName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
