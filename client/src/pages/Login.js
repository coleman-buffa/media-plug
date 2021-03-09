import React, {useEffect} from 'react';
import { Card, Container, Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../utils/API";

const useStyles = makeStyles({
  pagecont: {
    alignContent: "center"
  },
  cardcont: {
    marginTop: "10%",
    padding: 10,
    display: "flex",
    justifyContent: "center"
  },
  formcont: {
    alignContent: "center",
    margin: '0 50px',
  },
  inputcont: {
    margin: 5
  }
});

function Login() {

  const classes = useStyles();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  
//using isAuthenticated check database for user's email
  //if it exists do nothing
  //if it does not exists -> create a new user
useEffect(() => {
  if (isAuthenticated) {
    //API call that checks uf user email exists in DB
    API.checkUser(user.email)
    .then(result => {
      console.log(result);    
    })
    .catch(err => console.log(err));
  }
}, [isAuthenticated]);
  





  return (
    <Container className={classes.pagecont} md="true">
      <Card className={classes.cardcont}>   
        <form>
          <FormControl className={classes.formcont}>   
            {/* All we need below! */}           
            
            {isAuthenticated ?          
            (<Button variant="contained" color="primary" onClick={() => logout()}>Logout</Button>):(<Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>Login</Button>)}
          </FormControl>
        </form>
        <div>
          {/* User email: {email} */}
        </div>


      </Card>
    </Container>
  );
}

export default Login;