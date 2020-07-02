import React from 'react';
import styles from './Tables.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {
    hour: '10:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '10:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '11:00',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'booked' },
      { id: 3, status: 'event' },
      { id: 4, status: 'free' },
    ],
  },
  {
    hour: '11:30',
    tables: [
      { id: 1, status: 'free' },
      { id: 2, status: 'event' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'event' },
    ],
  },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <div>
          <Button className={styles.link} variant="outlined" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>Free table</Button>
          <Button className={styles.link} variant="outlined" color="primary" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>Free event</Button>
        </div>
      );
    case 'booked':
      return (
        <div>
          <Button className={styles.link} variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking`} activeClassName='active'>Booked</Button>
        </div>
      );
    case 'event':
      return (
        <div>
          <Button className={styles.link} variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events`} activeClassName='active'>Booked Event</Button>
        </div>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <h2>Tables view</h2>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>Tables Booking New</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/`} activeClassName='active'>Tables Booking Id</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>Tables Events New</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/`} activeClassName='active'>Tables Events Id</Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className={styles.hour}>Hour:</TableCell>
          <TableCell className={styles.tableHead}>Table 1</TableCell>
          <TableCell className={styles.tableHead}>Table 2</TableCell>
          <TableCell className={styles.tableHead}>Table 3</TableCell>
          <TableCell className={styles.tableHead}>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.hour}>
            <TableCell component="th" scope="row" className={styles.hour}>
              {row.hour}
            </TableCell>
            {row.tables.map(table => (
              <TableCell key={table.id}>{renderActions(table.status)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;