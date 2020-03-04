import React from 'react';
import { Switch, Route } from 'react-router';
import ShoppingRoutes from './ShoppingRoutes/ShoppingRoutes';
import SellingRoutes from './SellingRoutes/SellingRoutes';

const DashboardRoutes = () => (
  <Switch>
    <Route path="/auth/dashboard/shopping" component={ShoppingRoutes} />
    <Route path="/auth/dashboard/selling" component={SellingRoutes} />
  </Switch>
);

export default DashboardRoutes;
