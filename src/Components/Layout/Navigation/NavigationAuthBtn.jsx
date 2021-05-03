import React from "react";
import Router from "next/router";
import Button from "Components/Button/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  authBtn: {
    display: "flex",
    alignItems: "center",
    "& button": { width: 108 },
    [theme.breakpoints.down("sm")]: {
      margin: "23px auto 0",
    },
  },
}));

export default function NavigationAuthBtn() {
  const classes = useStyles();
  return (
    <div className={classes.authBtn}>
      <Button
        color="primary_bordered"
        className="mr-2"
        onClick={() => {
          Router.push("/login");
        }}
      >
        Login
      </Button>
      <Button color="secondary">Singup</Button>
    </div>
  );
}
