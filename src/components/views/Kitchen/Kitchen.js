import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const exampleContent = [
  {id: '1', table: 'table 1', order: 154},
  {id: '2', table: 'table 2', order: 458},
  {id: '3', table: 'remote 12', order: 12},
  {id: '4', table: 'table 4', order: 234},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <div className={styles.component}>
      <h2>Kitchen view</h2>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell>Table number/remote order number</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Done</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exampleContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              <Checkbox className={styles.checkbox} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;