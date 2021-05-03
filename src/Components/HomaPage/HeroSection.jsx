import { makeStyles } from "@material-ui/core/styles";
import InnerContainer from "Components/Layout/InnerContainer";
import Button from "Components/Button/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& h1": {
      fontSize: 72,
      margin: "80px auto",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

export default function HeroSection() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <InnerContainer>
        <div>
          <h1>Hero Section</h1>
          <div className="d-flex justify-content-between">
            <Button color="primary">primary</Button>
            <Button color="secondary">secondary</Button>
            <Button color="primary_bordered">primary_bordered</Button>
            <Button color="secondary_bordered">secondary_bordered</Button>
            <Button color="primary_transparent">primary_transparent</Button>
            <Button color="secondary_transparent">secondary_transparent</Button>
          </div>
        </div>
      </InnerContainer>
    </header>
  );
}
