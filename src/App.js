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
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Homepage from '../src/components/views/HomePage/HomaPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    //secondary: {
    //main: '#11cb5f',
    //},
  },
});

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={'/'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking'} component={TablesBooking} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events'} component={TablesEvents} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order'} component={WaiterOrder} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNow} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
