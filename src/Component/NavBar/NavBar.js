import React, { Fragment } from "react";
// import { Field } from "redux-form";

// Component Input
// import { renderTextAreaField } from "../../FormField/FormField.js";

import { Typography, Grid } from "@material-ui/core";

import useStyles from "../../styleConfig";
import ScenarioMenu from "./ScenarioMenu.js";

export default function NavBar(props) {
  const { renderSelectField } = props;
  const classes = useStyles();

  let [languages] = React.useState([
    "English",
    "Mandarin",
    "French",
    "Italian",
    "German"
  ]);

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.NavBar}>
        <ScenarioMenu />

    </Grid>
  );
}
