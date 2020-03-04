import React from 'react';
import PropTypes from 'prop-types';
import UnderConstructionSVG from '../../assets/SVGs/under-construction.svg';
import './UnderConstruction.scss';

const UnderConstruction = (props) => {
  const { requestedRoute } = props;
  return (
    <div className="UnderConstruction">
      <img src={UnderConstructionSVG} alt="Under Construction" />
      <h1>{`${requestedRoute} page is under construction. Please come back later`}</h1>
    </div>
  );
};

UnderConstruction.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
};

export default UnderConstruction;
