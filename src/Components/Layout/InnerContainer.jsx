import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 1180,
    padding: "0 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
  },
}));

export default function InnerContainer({ children }) {
  const classes = useStyles();
  return <Container className={classes.container}>{children}</Container>;
}
