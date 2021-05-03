import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import InnerContainer from "./InnerContainer";
import MoveToTop from "Components/Button/MoveToTop";

// Icons
import LogoSvg from "Assets/img/icons/logo.svg";
import SocialInstagramSvg from "Assets/img/icons/social-instagram.svg";
import SocialFacebookSvg from "Assets/img/icons/social-facebook.svg";
import SocialLinkedinSvg from "Assets/img/icons/social-linkedin.svg";
import SocialYoutubeSvg from "Assets/img/icons/social-youtube.svg";

const useStyles = makeStyles(theme => ({
  footer_root: {
    paddingTop: 68,
    background: theme.palette.primary.main,
    color: theme.color.mainText,
    "& .mainFooter": {
      paddingBottom: 130,
    },
    "& .subFooter": {
      position: "relative",
      paddingBottom: 50,
    },
    "& .footerLogo": {
      height: 80,
      "& svg": {
        transformOrigin: "0 0",
        transform: "scale(2)",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 20,
      },
    },
    "& p": {
      ...theme.font.s14w500,
      lineHeight: 1.7,
      margin: 0,
      padding: ".7rem 1rem .7rem 0",
    },
    "& h5": {
      ...theme.font.s20w700,
      color: theme.palette.secondary.main,
      margin: 0,
      marginBottom: 35,
    },
    "& ul": {
      textTransform: "capitalize",
    },
    "& ul.menu": {
      "& li": {
        "& > a": {
          ...theme.font.s14w500,
          padding: ".7rem 1rem .7rem 0",
          display: "block",
        },
      },
    },
    "& ul.social": {
      "& li": {
        padding: ".65rem",
        borderRadius: "50%",
        transition: theme.transitions.linkActive,
        "& > a": {
          display: "block",
          width: 30,
          height: 30,
        },
        "&:hover": {
          background: theme.palette.secondary.main,
        },
      },
    },
    "& .MuiTextField-root": {
      marginBottom: 43,
      width: "100%",
      "& input": {
        ...theme.font.s14w500,
        background: "#FFFFFF",
        borderRadius: 5,
        border: "none",
        padding: "15px 17px",
        "&::placeholder": {
          color: "#A2ABB8",
          fontSize: 15,
          verticalAlign: "middle",
        },
      },
    },
    "& .btnMoveToTop": {
      position: "absolute",
      right: 0,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer_root}>
      <InnerContainer>
        <Grid container className="mainFooter">
          <Grid item xs={12} md={4}>
            <div className="footerLogo">
              <LogoSvg />
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <h5>Links</h5>
            <ul className="menu">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Services</a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <h5>Contact Us</h5>
            <p>
              Call: <br /> Email:
            </p>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <h5>Follow Us</h5>
            <p>Subscribe to our newsletter</p>
            <TextField
              placeholder="Search field"
              variant="outlined"
              type="email"
              placeholder="Enter your Email"
            />

            <ul className="social d-flex align-items-center">
              <li>
                <a href="#">
                  <SocialInstagramSvg />
                </a>
              </li>
              <li>
                <a href="#">
                  <SocialFacebookSvg />
                </a>
              </li>
              <li>
                <a href="#">
                  <SocialLinkedinSvg />
                </a>
              </li>
              <li>
                <a href="#">
                  <SocialYoutubeSvg />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid container className="subFooter">
          <Grid item xs={12}>
            <p className="copyRight">© 2021 All rights reserved.</p>
          </Grid>
          <div className="btnMoveToTop">
            <MoveToTop />
          </div>
        </Grid>
      </InnerContainer>
    </footer>
  );
}
