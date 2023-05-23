import React, { useState, useEffect } from 'react';

const ErrorModal = ({ headline, content, setErrorMsg }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (content !==""){
      setShowModal(true);
    }

  }, [content]);

  const closeModal = () => {
    setErrorMsg("")
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-danger">{headline}</h1>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorModal;