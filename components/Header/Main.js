import { Button, Typography, makeStyles } from "@material-ui/core";
import classes from "../../styles/Header/Main.module.css";
import mainPic from "../../Assets/Images/illustration1.png";
import Image from "next/image";

const useStyle = makeStyles({
  mainText: {
    height: "140px",
    width: "555px",
  },
  subText: {
    width: "555px",
    height: "60px",
    color: "#4F5665",
    marginTop: "20px",
  },
  button: {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "25px",
    width: "250px",
    height: "60px",
    background: "#F53838",
    marginTop: "65px",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      background: "#F53838",
      // boxshadow: '2rem 5rem 4rem rgba(245, 56, 56, 1)'
    },
  },
});

function Main() {
  const style = useStyle();

  return (
    <div className={classes.main}>
      <div className={classes.container1}>
        <Typography className={style.mainText} variant="h1">
          Want anything to be easy with <b>Lasles VPN.</b>
        </Typography>
        <Typography className={style.subText} variant="subtitle2">
          Provide a network for all your needs with ease and fun{" "}
          <b>Lasles VPN</b> discover interesting features from us
        </Typography>
        <Button
          className={`${style.button} ${classes.getStarted} `}
          variant="contained"
          disableElevation
        >
          get started
        </Button>
      </div>

      <div className={classes.container2}>
        <Image alt="" src={mainPic} />
      </div>
    </div>
  );
}

export default Main;
