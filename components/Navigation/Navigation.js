import { Button, Link, makeStyles, Typography } from "@material-ui/core";
import logo from "../../Assets/Images/lasellsLogo.png";
import classes from "../../styles/Navigation.module.css";
import Image from "next/image";

const useStyle = makeStyles({
  buttons: {
    fontSize: "16px",
    lineHeight: "18.96px",
    fontWeight: "500",
    width: "150px",
    height: "45px",
    border: "1px solid #F53855",
    borderRadius: "50px",
    color: "#F53855",
    marginLeft: "30px",
    textTransform: "capitalize",

    "&:hover": {
      background: "#F53838",
      color: "white",
    },
  },

  options: {
    cursor: "pointer",
    color: "#4F5665",
    cursor: "pointer",
    height: "19px",
  },
  sign: {
    fontSize: "16px",
    lineHeight: "18.96px",
    fontWeight: "500",
    textTransform: "capitalize",
    borderRadius: "50px",
  },
  type: {
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "23.7px",
  },
});

function Navigation() {
  const style = useStyle();

  return (
    <div className={classes.Navigation}>
      <div className={classes.container1}>
        <Image alt="" src={logo} />
        <Typography className={style.type}>
          Lasles<b>VPN</b>
        </Typography>
      </div>

      <div className={classes.container2}>
        <Link variant="subtitle1" className={style.options}>
          About
        </Link>
        <Link variant="subtitle1" className={style.options}>
          Features
        </Link>
        <Link variant="subtitle1" className={style.options}>
          Pricing
        </Link>
        <Link variant="subtitle1" className={style.options}>
          Help
        </Link>
        <Link variant="subtitle1" className={style.options}>
          Testimonials
        </Link>
      </div>

      <div className={classes.container3}>
        <Button
          disableTouchRipple
          disableElevation
          disableFocusRipple
          className={`${classes.signIn} ${style.sign}`}
        >
          sign In
        </Button>
        <Button className={style.buttons}> sign up</Button>
      </div>
    </div>
  );
}

export default Navigation;
