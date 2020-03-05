import React from 'react';
import PropTypes from 'prop-types';

const HTMLTitle = (props) => {
  const { title } = props;
  document.title = title ? `Hindustan - ${title}` : 'Hindustan';
  return (
    <div />
  );
};

HTMLTitle.propTypes = {
  title: PropTypes.string,
};

HTMLTitle.defaultProps = {
  title: null,
};

export default HTMLTitle;
