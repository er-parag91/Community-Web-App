import React from 'react';
import { Switch, Route } from 'react-router';
import ShoppingRoutes from './ShoppingRoutes/ShoppingRoutes';
import './DashboardRoutes.scss';
import SideNavBarManu from '../../../Data/SideNavBar';
import AddProduct from './SellingRoutes/SelllingComponents/AddProduct/addProduct';
import YourProduct from './SellingRoutes/SelllingComponents/yourProducts/yourProducts';
import MyCart from './User/MyCart';
import MyProfile from './User/MyProfile';
import UpdateProduct from './SellingRoutes/SelllingComponents/AddProduct/updateProduct';

const DashboardRoutes = () => (
  <div className="DashboardRoutes">
    <Switch>
      <Route path="/auth/dashboard/user/myProfile" render={() => <MyProfile />} />
      <Route path="/auth/dashboard/user/myCart" render={() => <MyCart />} />
      {SideNavBarManu.ShoppingMenu.map((manuItem) => (
        <Route key={manuItem.value} path={`/auth/dashboard/shopping/${manuItem.value}`} render={() => <ShoppingRoutes requestedRoute={manuItem} />} />
      ))}
      <Route path="/auth/dashboard/selling/addProduct" render={() => <AddProduct requestedRoute="Add Product" />} />
      <Route path="/auth/dashboard/selling/yourProducts/:productId" render={() => <UpdateProduct requestedRoute="Update Product" />} />
      <Route path="/auth/dashboard/selling/yourProducts" render={() => <YourProduct requestedRoute="Your Product" />} />
    </Switch>
  </div>
);

export default DashboardRoutes;
