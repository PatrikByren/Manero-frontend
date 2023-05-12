function ErrorComponent({ errormessage, showError, setShowError }) {
  return (
    <div className="error-message">
      {!showError && <p className="error-message">{errormessage}</p>}
    </div>
  );
}
export default ErrorComponent;
