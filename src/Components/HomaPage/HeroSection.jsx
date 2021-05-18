import { makeStyles } from "@material-ui/core/styles";
import InnerContainer from "Components/Layout/InnerContainer";
import { useSelector } from "react-redux";

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
  const test = useSelector(state => state);
  console.log("test: ", test);

  return (
    <header className={classes.root}>
      <InnerContainer>
        <div>
          <h1>تست فونت</h1>
          {/* <h4>{test}</h4> */}
        </div>
      </InnerContainer>
    </header>
  );
}
