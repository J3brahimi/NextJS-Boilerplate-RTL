import { makeStyles } from "@material-ui/core/styles";
import InnerContainer from "Components/Layout/InnerContainer";

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
          <h1>تست فونت</h1>
        </div>
      </InnerContainer>
    </header>
  );
}
