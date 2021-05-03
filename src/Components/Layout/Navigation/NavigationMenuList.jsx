import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menu: {
    "& ul": {
      display: "flex",
      textTransform: "capitalize",
      "& a": {
        ...theme.font.s16w500,
        transition: theme.transitions.linkActive,
        padding: "6px 16px",
        borderRadius: 2.5,
        display: "block",
        "&:hover": {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.secondary.light,
        },
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: 20,
        flexDirection: "column",
        "& a": {
          padding: "6px 0",
        },
      },
    },
  },
}));

const routes = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "About",
    route: "/about",
  },
];

export default function NavigationMenuList({ styles }) {
  const classes = useStyles(styles);
  return (
    <div className={classes.menu}>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link href={route.route}>
              <a>{route.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
