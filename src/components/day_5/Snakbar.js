import React, { useState } from 'react';
import './Snackbar.css';

const Snakbar = ({ message }) => {
  const [showSnackbar, setShowSnackbar] = useState(true);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <>
      {showSnackbar && (
        <div className="snackbar">
          <div className="snackbar-content">
            <span className="snackbar-message">{message}</span>
            <button className="snackbar-close" onClick={handleCloseSnackbar}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>   
  );
};

export default Snakbar;
