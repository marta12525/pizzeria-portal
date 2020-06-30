import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import TablesBooking from '../src/components/views/TablesBooking/TablesBooking';
import TablesBookingNew from '../src/components/views/TablesBookingNew/TablesBookingNew';
import TablesEvents from '../src/components/views/TablesEvents/TablesEvents';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrder from '../src/components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNow from '../src/components/views/WaiterOrderNew/WaiterOrderNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
//import Homepage from './components/views/HomePage/HomePage';
//*<Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tablesbookin'} component={TablesBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/tablesbookingnew'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tablesevents'} component={TablesEvents} />
          <Route exact path={process.env.PUBLIC_URL + '/tableseventsnew'} component={TablesEventsNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiterorder'} component={WaiterOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/waiterordernew'} component={WaiterOrderNow} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />

        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
