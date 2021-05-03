import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
  main_root: {
    background: theme.palette.background.default,
    margin: "0 auto",
    minHeight: "100vh",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.main_root}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
