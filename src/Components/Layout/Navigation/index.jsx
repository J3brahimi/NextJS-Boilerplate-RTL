import { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Drawer, useMediaQuery } from "@material-ui/core";
import InnerContainer from "../InnerContainer";
import NavigationMenuList from "./NavigationMenuList";
import NavigationAuthBtn from "./NavigationAuthBtn";

// Icons
import LogoSvg from "Assets/img/icons/logo.svg";
import ListsViewMenuSvg from "Assets/img/icons/lists-view-menu.svg";
import CloseSvg from "Assets/img/icons/close.svg";

const useStyles = makeStyles(theme => ({
  nav_root: {
    padding: " 21px 0px",
    background: theme.palette.primary.main,
    color: theme.color.mainText,
  },
  menuIcon: {
    cursor: "pointer",
    "& path": {
      fill: "#fff",
    },
  },
  logo: {
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  listDrawer: {
    width: 320,
    zIndex: 99,
  },
  closeHeader: {
    ...theme.font.s16w700,
    display: "flex",
    alignItems: "center",
    padding: 30,
    background: theme.palette.primary.main,
    color: "#fff",
    boxShadow: theme.shadows[4],
    "& i": {
      display: "flex",
      marginRight: "3rem",
      cursor: "pointer",
      "& path": {
        fill: "#fff",
      },
    },
  },
  paperDrawer: {
    backgroundColor: theme.palette.background.default,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:960px)");
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  return (
    <>
      <nav className={classes.nav_root}>
        <InnerContainer>
          {matches ? (
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <div className={classes.logo}>
                  <Link href="/">
                    <a>
                      <LogoSvg />
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <NavigationMenuList />
              </Grid>
              <Grid item style={{ marginLeft: "auto" }}>
                <NavigationAuthBtn />
              </Grid>
            </Grid>
          ) : (
            <div onClick={toggleDrawer(true)} className={classes.menuIcon}>
              <ListsViewMenuSvg viewBox="0 0 15 15" width="20" height="20" />
            </div>
          )}
        </InnerContainer>
      </nav>
      <Drawer
        anchor="left"
        open={drawer}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.paperDrawer,
        }}
      >
        <div className={classes.listDrawer}>
          <div className={classes.closeHeader}>
            <i onClick={toggleDrawer(false)}>
              <CloseSvg />
            </i>
            <span>Menu</span>
          </div>
          <InnerContainer>
            <Grid container direction="column" className="mt-3">
              <Grid item>
                <div className={classes.logo}>
                  <Link href="/">
                    <a>
                      <LogoSvg />
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <NavigationMenuList />
              </Grid>
              <Grid item>
                <NavigationAuthBtn />
              </Grid>
            </Grid>
          </InnerContainer>
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;
