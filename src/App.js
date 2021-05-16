import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Map from './Pages/Map';
import { Grid } from '@material-ui/core';
import NavToolbar from "./Component/NavBar/Toolbar"
import Leaflet from './Pages/Leaflet';
import Test from './Pages/test';

function App() {
  return (
    <Grid container direction="column">
      <NavBar />
      <Test />
    </Grid>
    // <NavToolbar />
  );
}

export default App;
