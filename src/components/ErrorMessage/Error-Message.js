import React, { useState } from "react";

function ErrorComponent({ errormessage, showError, setShowError }) {

  return (
    <div className="error-message">
      {!showError && <div>{errormessage}</div>}
    </div>
  );
}
export default ErrorComponent;