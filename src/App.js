import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginImage from './login3.svg';



function App() {
  return (
    <>
      <Grid container className="container" justify="center" alignItems="center">
        <Grid item xs={7} container className="loginContainer">
          <Grid item xs={12} lg={6} className="imageContainer" container justify="center" alignItems="center">
            <img src={LoginImage} alt="Login" className="loginImage" />
          </Grid>
          <Grid item container xs={12} lg={6} className="inputContainer" justify="center" alignItems="center">
            <Grid item xs={12} lg={6} container direction="column">
              <h1>Matcha</h1>
              <TextField label="username" />
              <TextField label="password" type="password" m={2}/>
              <Button variant="contained" color="primary" m={2}>Login</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
