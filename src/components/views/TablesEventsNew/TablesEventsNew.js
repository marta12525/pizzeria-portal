import React from 'react';
import styles from './TablesEventsNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesEventsNew = () => {
  return (
    <Paper className={styles.component}>
      <h2>Tables Events New</h2>
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
              <Button className={styles.button} variant="contained">+Add</Button>
            </TableCell>
            <TableCell>
              <Button className={styles.button} variant="contained">+Add</Button>
            </TableCell>
            <TableCell>
              <TextField
                id="date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                id="time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
            <TableCell>
              <Button className={styles.button} variant="contained">+Add</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TablesEventsNew;