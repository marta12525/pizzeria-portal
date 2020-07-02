import React from 'react';
import styles from './TablesBooking.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const demoData = {
  table: '1',
  people: '2',
  time: '10:30',
  date: '2020-07-02',
  name: 'Marta Bed',
};

const TablesBooking = () => {
  return (
    <Paper className={styles.component}>
      <h2>Tables Booking view</h2>
      <Table>
        <TableHead>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Name</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {demoData.table}
            </TableCell>
            <TableCell>
              {demoData.people}
            </TableCell>
            <TableCell>
              <TextField
                id="date"
                type="date"
                value={demoData.date}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                id="time"
                type="time"
                value={demoData.time}
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              {demoData.name}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <Button className={styles.button} variant="contained">Edit</Button>
      </div>
    </Paper>
  );
};

export default TablesBooking;