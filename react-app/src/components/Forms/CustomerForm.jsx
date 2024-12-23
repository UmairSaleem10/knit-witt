import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate, Route, Routes } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';
import Blank from '../../Pages/Blank';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
 
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
  },
}));

export default function CustomerForm() {
  const classes = useStyles();
  const navigate=useNavigate();

  const NavigateToHome =()=>{
      navigate('/AppLayout');
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={10} md={12} className={classes.image} />
      <Grid item xs={12} sm={8} md={10} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
         
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Contact"
              label="Contact"
              type="contact"
              id="contact"
              autoComplete="contactRequired"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="CNIC"
              label="CNIC"
              type="CNIC"
              id="CNIC"
              autoComplete="CNIC"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Date of Birth"
              label="Date of Birth"
              type="DOB"
              id="dateofbirth"
              autoComplete="dateofbirth"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Salary"
              label="Salary"
              type="salary"
              id="salary"
              autoComplete="salary"
            />
            
            <Button
              type="submit"
              width="30px"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={NavigateToHome}
              margin="10px"
            >
              Add Employee
            </Button>
            <Button
              type="submit"
              width="30px"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={NavigateToHome}
            >
              Add Employee
            </Button>
            <Routes>
              <Route path='/AppLayout' element={<AppLayout />}>
                <Route path='/AppLayout/orders' element={<Blank />} />
                <Route path='/AppLayout/employeeRoles' element={<Blank />} />
                <Route path='/AppLayout/warehouse' element={<Blank />} />
                <Route path='/AppLayout/inventory' element={<Blank />} />
                <Route path='/AppLayout/courier' element={<Blank />} />
              </Route>
            </Routes>
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}