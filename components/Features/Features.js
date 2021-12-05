import classes from "../../styles/Features/Features.module.css";
import logo from "../../Assets/Images/illustration2.png";
import Image from "next/image";
import { Typography, makeStyles } from "@material-ui/core";
import tick from "../../Assets/Images/tick.png";

const useStyles = makeStyles({
  mainText: {
    textTransform: "capitalize",
    maxWidth: "384px",
    marginBottom: "20px",
  },
  subText1: {
    maxWidth: "428px",
    marginBottom: "5px",
    color: "#4F5665",
  },
  subText2: {
    marginTop: "15px",
    color: "#4F5665",
  },
});

function Features() {
  const style = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Image alt="" src={logo} />
        </div>
        <div className={classes.text}>
          <Typography className={style.mainText} variant="h2">
            We Provide Many Features You Can Use
          </Typography>
          <Typography className={style.subText1} variant="body2">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </Typography>

          <Typography className={style.subText2} variant="body2">
            <div className={classes.para}>
              <span>
                <Image alt="" src={tick} />
              </span>{" "}
              Powerfull online protection
            </div>
            <div className={classes.para}>
              <span>
                <Image alt="" src={tick} />
              </span>{" "}
              Internet without borders.
            </div>
            <div className={classes.para}>
              <span>
                <Image alt="" src={tick} />
              </span>{" "}
              Supercharged VPN
            </div>
            <div className={classes.para}>
              <span>
                <Image alt="" src={tick} />
              </span>{" "}
              No specific time limits
            </div>
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Features;
