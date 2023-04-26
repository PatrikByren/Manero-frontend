import React, { useState } from "react";

function ForgotPasswordForm({ placeholder, nameid, name, value, setValue }) {
  // const [value, setValue] = useState("");

  return (
    <div className="text-center">
      <label className="baselabel" htmlFor={nameid}>
        {name}
      </label>
      <input
        className="baseinput"
        type={nameid}
        id={nameid}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default ForgotPasswordForm;
