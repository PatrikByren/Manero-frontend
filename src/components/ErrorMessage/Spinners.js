import React from 'react';

const Spinners = ({ }) => {
  return (
    <div>
        <button className="basebtn" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    </div>
  );
};

export default Spinners;