// InputSingel måste ligga i en = <div className='inputcontainer'>
function InputSingel({ placeholder, type, nameid, name, value, setValue }) {
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
    </div>
  );
}

export default InputSingel;
