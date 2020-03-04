import React from 'react';
import { Switch, Route } from 'react-router';
import ShoppingRoutes from './ShoppingRoutes/ShoppingRoutes';
import SellingRoutes from './SellingRoutes/SellingRoutes';
import './DashboardRoutes.scss';
import SideNavBarManu from '../../../Data/SideNavBar';

const DashboardRoutes = () => (
  <div className="DashboardRoutes">
    <Switch>
      {SideNavBarManu.ShoppingMenu.map((manuItem) => (
        <Route key={manuItem.value} path={`/auth/dashboard/shopping/${manuItem.value}`} render={() => <ShoppingRoutes requestedRoute={manuItem.label} />} />
      ))}
      {SideNavBarManu.SellingManu.map((manuItem) => (
        <Route key={manuItem.value} path={`/auth/dashboard/selling/${manuItem.value}`} render={() => <SellingRoutes requestedRoute={manuItem.label} />} />
      ))}
    </Switch>
  </div>
);

export default DashboardRoutes;
