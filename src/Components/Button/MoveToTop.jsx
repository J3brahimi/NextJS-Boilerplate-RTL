import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BaseButton from "./BaseButton";

// Icons
import DownSvg from "Assets/img/icons/down.svg";

const useStyles = makeStyles(theme => ({
  btnMoveToTop: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(137.88deg, #46CC8F 33.9%, #49b785 95.51%)",
    "& svg": {
      transform: "rotate(180deg)",
      "& path": {
        stroke: theme.palette.primary.main,
      },
    },
  },
}));

export default function MoveToTop(props) {
  const classes = useStyles();
  return (
    <BaseButton
      className={classes.btnMoveToTop}
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      {...props}
    >
      <DownSvg />
    </BaseButton>
  );
}
