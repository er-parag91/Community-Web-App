import React from 'react';
import PropTypes from 'prop-types';
import UnderConstruction from '../../../../UI/UnderConstruction/UnderConstruction';
import HTMLTitle from '../../../../UI/HTMLTitle/HTMLTitle';

const SellingRoutes = (props) => {
  const { requestedRoute } = props;
  console.log(requestedRoute);
  return (
    <div>
      <HTMLTitle title={requestedRoute.label} />
      <UnderConstruction requestedRoute={requestedRoute.label} />
    </div>
  );
};

SellingRoutes.propTypes = {
  requestedRoute: PropTypes.shape().isRequired,
};

export default SellingRoutes;
