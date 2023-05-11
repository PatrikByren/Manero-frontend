import { useState } from "react";

function InputSingel({ placeholder, type, nameid, name, value, setValue }) {
  const [valid, setValid] = useState(true);

//useEffect ? 

  const valueChangeHandler = (event) => {
    console.log(event)
    const newValue = event.target.value;
    console.log('value'+newValue)
    setValue(newValue);
    if(value==='')
    {
      console.log('tom string')
      setValid(true)
    }
    else{
      setValid(validateHandler(newValue));
    }
  };
  const validateHandler = (value) => {
    if(type === 'password')
    {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }
  };
  return (
    <div className="text-center">
      <label className="baselabel" htmlFor={nameid}>
        {name}
      </label>
      <input
        className="baseinput"
        type={type}
        id={nameid}
        value={value}
        placeholder={placeholder}
        onChange={valueChangeHandler}
      />
      {!valid && <p className="small text-danger">Lösenordet ska innehålla  8 tecken en stor bokstav, en liten bokstav, ett nummer och ett specialtecken.</p>}
    </div>
  );
}

export default InputSingel;
