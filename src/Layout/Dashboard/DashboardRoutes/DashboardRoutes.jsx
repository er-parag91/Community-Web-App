import React from 'react';
import { Switch, Route } from 'react-router';
import ShoppingRoutes from './ShoppingRoutes/ShoppingRoutes';
import './DashboardRoutes.scss';
import SideNavBarManu from '../../../Data/SideNavBar';
import AddProduct from './SellingRoutes/SelllingComponents/AddProduct/addProduct';
import YourProduct from './SellingRoutes/SelllingComponents/yourProducts/yourProducts';

const DashboardRoutes = () => (
  <div className="DashboardRoutes">
    <Switch>
      {SideNavBarManu.ShoppingMenu.map((manuItem) => (
        <Route key={manuItem.value} path={`/auth/dashboard/shopping/${manuItem.value}`} render={() => <ShoppingRoutes requestedRoute={manuItem} />} />
      ))}
      <Route path="/auth/dashboard/selling/addProduct" render={() => <AddProduct requestedRoute="Add Product" />} />
      <Route path="/auth/dashboard/selling/yourProducts/:productId" render={() => <AddProduct requestedRoute="Update Product" />} />
      <Route path="/auth/dashboard/selling/yourProducts" render={() => <YourProduct requestedRoute="Your Product" />} />
    </Switch>
  </div>
);

export default DashboardRoutes;
