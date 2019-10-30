import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    margin: '1rem auto 0',
    maxWidth: '500px'
  },
  header: {
    borderBottom: '1px solid #d5d5d5'
  },
  formControl: {
    marginTop: '1rem'
  }
});

const Auth = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardHeader title="Вход" className={classes.header} />
        <CardContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Login</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={values.login}
              onChange={handleChange('login')}
            />
          </FormControl>

          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button color="primary">Login</Button>
          <Button color="primary">Register</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Auth;
