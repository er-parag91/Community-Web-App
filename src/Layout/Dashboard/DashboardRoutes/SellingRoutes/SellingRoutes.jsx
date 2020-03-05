import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import UnderConstruction from '../../../../UI/UnderConstruction/UnderConstruction';

const SellingRoutes = (props) => {
  const { requestedRoute } = props;
  return (
    <div>
      <Helmet>
        <title>
          Hindustan -
          {` ${requestedRoute}`}
        </title>
      </Helmet>
      <UnderConstruction requestedRoute={requestedRoute} />
    </div>
  );
};

SellingRoutes.propTypes = {
  requestedRoute: PropTypes.string.isRequired,
};

export default SellingRoutes;
