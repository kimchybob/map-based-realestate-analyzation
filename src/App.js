import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import { Grid } from '@material-ui/core';
import ToolBar from "./Component/NavBar/Toolbar"
// import Leaflet from './Pages/Leaflet';
import Test from './Pages/test';

function App() {
  return (
    <Grid container direction="column">
      <ToolBar />
      <Test />
    </Grid>
    // <NavToolbar />
  );
}

export default App;
