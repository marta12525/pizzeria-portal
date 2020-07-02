import React from 'react';
import styles from './WaiterOrder.module.scss';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const exampleMenu = [
  {name: 'pizza', price: '15$'},
  {name: 'salad', price: '10$'},
];

const WaiterOrder = () => {
  const {id} = useParams();
  return (
    <Paper className={styles.component}>
      <h2>Waiter Order view</h2>
      <h3>Order number: {id}</h3>
      <div className={styles.order}>
        <div className={styles.table}>
          <div className={styles.body}>
            {exampleMenu.map(row => (
              <div className={styles.menuRow} key={row.name}>
                <div className={styles.position}>
                  {row.name}
                  {' '}
                  {row.price}
                </div>
                <Button className={styles.button} variant="contained">Edit</Button>
                <Button className={styles.button} variant="contained">Delete</Button>
              </div>
            ))}
            <Button className={styles.button} variant="contained">+Add</Button>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.tableOption}>
            <h3>Table number:</h3>
            <Select
              id="select-table"
              displayEmpty
              value={1}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </div>
          <div className={styles.cost}>
            <h3>Cost</h3>
            <p>0$</p>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <Button className={styles.button} variant="contained">Submit</Button>
      </div>
    </Paper>
  );
};

export default WaiterOrder;