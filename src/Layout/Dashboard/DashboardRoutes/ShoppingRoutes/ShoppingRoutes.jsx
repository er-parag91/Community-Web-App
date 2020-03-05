import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import UnderConstruction from '../../../../UI/UnderConstruction/UnderConstruction';

const ShoppingRoutes = (props) => {
  const { requestedRoute } = props;
  return (
    <div>
      <Helmet>
        <title>
          Hindustan -
          {` ${requestedRoute} Shopping`}
        </title>
      </Helmet>
      <UnderConstruction requestedRoute={requestedRoute} />
    </div>
  );
};

ShoppingRoutes.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
};

export default ShoppingRoutes;
