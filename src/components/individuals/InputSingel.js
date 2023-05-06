// InputSingel måste ligga i en = <div className='inputcontainer'>
function InputSingel({ placeholder, nameid, name, value, setValue }) {
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

export default InputSingel;
