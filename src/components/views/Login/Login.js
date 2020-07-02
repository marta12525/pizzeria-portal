import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <div className={styles.component}>
    <h2>Login</h2>
    <form className={styles.form}>
      <TextField
        label="Login"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      >
      </TextField>
      <TextField
        label="Password"
        type="password"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyIcon />
            </InputAdornment>
          ),
        }}
      >
      </TextField>
      <Button className={styles.link} variant="contained" component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Log in</Button>
    </form>
  </div>
);

export default Login;