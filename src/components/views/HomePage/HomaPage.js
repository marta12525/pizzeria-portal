import React from 'react';
import styles from './HomePage.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const statistics = [
  {id: '1', status: 'closed', location: 'restaurant'},
  {id: '2', status: 'closed', location: 'restaurant'},
  {id: '3', status: 'closed', location: 'delivery'},
  {id: '4', status: 'in progress', location: 'restaurant'},
];

const schedul = [
  {id: '1', type: 'reservation', time: '11:30', table: '2', people: '1'},
  {id: '2', type: 'reservation', time: '14:30', table: '1', people: '5'},
  {id: '3', type: 'event', time: '10:00', table: '3', people: '3'},
  {id: '4', type: 'event', time: '16:00', table: '4', people: '4'},
];


const HomePage = () => {
  return (
    <div className={styles.component}>
      <h2>Statistics</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statistics.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.location}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <h2>Reservation & Event list</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>List</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>People</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedul.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.type}
                </TableCell>
                <TableCell>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.table}
                </TableCell>
                <TableCell>
                  {row.people}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default HomePage;