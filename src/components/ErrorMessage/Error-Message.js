import React, { useState } from "react";

function ErrorComponent({ errormessage }) {
  const [showError, setShowError] = useState(false);

  function handleClick() {
    setShowError(true);
  }

  return (
    <div className="error-message">
      <button onClick={handleClick}>Visa felmeddelande</button>
      {showError && <div>{errormessage}</div>}
    </div>
  );
}
