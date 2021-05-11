import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Map from './Pages/Map';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container direction="column">
      <NavBar />
      <Map />
    </Grid>
  );
}

export default App;
