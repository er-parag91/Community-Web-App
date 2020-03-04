import React from 'react';
import PropTypes from 'prop-types';
import UnderConstruction from '../../../../UI/UnderConstruction/UnderConstruction';

const SellingRoutes = (props) => {
  const { requestedRoute } = props;
  return (
    <div>
      <UnderConstruction requestedRoute={requestedRoute} />
    </div>
  );
};

SellingRoutes.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
};

export default SellingRoutes;
