import React from 'react';
import PropTypes from 'prop-types';
import UnderConstruction from '../../../../UI/UnderConstruction/UnderConstruction';

const ShoppingRoutes = (props) => {
  const { requestedRoute } = props;
  return (
    <div>
      <UnderConstruction requestedRoute={requestedRoute} />
    </div>
  );
};

ShoppingRoutes.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
};

export default ShoppingRoutes;
