import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message, show } = props;
  if (show) {
    return (
      <div className="message">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 32 32">
          <g id="Layer_57" data-name="Layer 57">
            <path d="M16 31a15 15 0 1115-15 15 15 0 01-15 15zm0-28a13 13 0 1013 13A13 13 0 0016 3z" fill="#B33A3A" />
            <path d="M16 24a2 2 0 112-2 2 2 0 01-2 2zm0-2zM16 18a1 1 0 01-1-1V8a1 1 0 012 0v9a1 1 0 01-1 1z" fill="#B33A3A" />
          </g>
        </svg>
        <p className="msg">{message}</p>
      </div>
    );
  }

  return null;
};

Message.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default Message;
