import React from 'react';
import PropTypes from 'prop-types';
import './OutlinedButton.scss';

const OutlinedButton = (props) => {
  const { text, OutlinedButtonClicked } = props;
  return (
    <button onClick={OutlinedButtonClicked} className="OutlinedButton" type="button">
      {text}
    </button>
  );
};

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  OutlinedButtonClicked: PropTypes.func.isRequired,
};

export default OutlinedButton;
