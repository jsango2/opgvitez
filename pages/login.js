// import { Button, Card, Form } from 'semantic-ui-react';
import React, { useState, useEffect } from "react";
import firebase from "../components/firebase/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../components/firebase/firebase";
// import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import { deleteUser, setCurrentUser } from './../store/actions/authActions';
// import { connect } from 'react-redux';
// import 'semantic-ui-css/semantic.min.css';
// import Spinner from 'react-bootstrap/Spinner';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "7px",
    marginTop: "10px",
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [logedIn, setlogedIn] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, sethasAccount] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fetching, setFetching] = useState(true);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setlogedIn(true);
      setEmailError("");
      // props.setCurrentUser(user);

      console.log("OnAuthStateChanged: Logged in");
    } else {
      setlogedIn(false);
      console.log("OnAuthStateChanged: Logged out");
    }
  });

  //----------------------------------------------------
  const handleLogIn = (e) => {
    const auth = getAuth();

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      // Handle Errors here.
      if (error) {
        setEmailError(error.code);
      }
      // setProcess(true);
      // setlogedIn(true);
    });
    setlogedIn(true);
    setFetching(true);
    setEmail("");
    setPassword("");

    // if (logedIn === false) {
    // 	return <Redirect to='/' />;
    // }
  };

  const handleLogOut = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("odlogiralo");
      })
      .catch((error) => {
        // An error happened.
      });
    setEmail("");
    setPassword("");

    // if (logedIn === false) {
    // 	return <Redirect to='/' />;
    // }
  };

  // if (logedIn === true) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="formWrappFlex">
      {/* {!fetching && (
				<Spinner className='spinner' animation='border' role='status'>
					<span className='sr-only'>Loading...</span>
				</Spinner>
			)} */}
      <div className="formCenter">
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" gutterBottom>
            RACE ONE
          </Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <FormGroup>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleLogIn}
            >
              Log in
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleLogOut}
            >
              Log out
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
