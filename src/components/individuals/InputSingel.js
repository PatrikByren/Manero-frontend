import ErrorMessage from '../ErrorMessage/Error-Message'
import { useState, useEffect  } from "react";

// InputSingel måste ligga i en = <div className='inputcontainer'>
function InputSingel({ placeholder, type, nameid, name, value, setValue, valid, setValid,showError,setShowError }) {
const [errorText, setErrorText] = useState("");


  useEffect(() => {
      checkValid();
  }, [value]);

  const checkValid = () => {
    if(valid != null)
    {
    setValid(validateHandler());
    }
  };
  const validateHandler = () => {
    if(nameid === 'password')
    {
      setErrorText("Fel lösenord, inte säkert nog eller så matchar dem inte!")
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }
    if(nameid === 'firstname' || nameid === 'lastname')
    {
      setErrorText("Felaktigt namn!")
      const regexNoSpecialSignNoNumber = /^(?=.*[a-zA-Z])[^\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
      return regexNoSpecialSignNoNumber.test(value);
    }
    if(nameid === 'email')
    {
      setErrorText("Felaktigt email, example@domain.com")
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(value);
    }
    if(valid)
    {
      setShowError(false)
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
        onChange={(event) => setValue(event.target.value)}
      />
      {showError && !valid &&(<div className="small text-danger"> <ErrorMessage errormessage={errorText}/> </div>)}
    </div>
  );
}

export default InputSingel;
