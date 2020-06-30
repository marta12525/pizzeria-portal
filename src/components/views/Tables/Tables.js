import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>TablesBookingNew</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>TablesBookingId</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>TablesEventsNew</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>TablesEventsId</Link>
  </div>
);

export default Tables;