import React from 'react';
import PropTypes from 'prop-types';
import UnderConstruction from '../../../../UI/UnderConstruction/UnderConstruction';
import HTMLTitle from '../../../../UI/HTMLTitle/HTMLTitle';

const ShoppingRoutes = (props) => {
  const { requestedRoute } = props;
  return (
    <div>
      <HTMLTitle title={`${requestedRoute.label} Shopping`} />
      <UnderConstruction requestedRoute={requestedRoute.label} />
    </div>
  );
};

ShoppingRoutes.propTypes = {
  requestedRoute: PropTypes.shape().isRequired,
};

export default ShoppingRoutes;
