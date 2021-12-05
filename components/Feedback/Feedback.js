import classes from "../../styles/Feedback/Feedback.module.css";
import Reviews from "./Reviews";
import { Typography, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  Headline: {
    textTransform: "capitalize",
  },
  arrowRight: {
    color: "#FFFFFF",
    padding: "20px",
  },
  arrowLeft: {
    color: "#f53838",
    padding: "20px",
  },
});

function Feedback() {
  const style = useStyles();

  return (
    <section >
      <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography variant="h2" className={style.Headline}>
          Trusted by thousands <p className={classes.para}>of</p>  happy customer
        </Typography>
      </div>

      <div className={classes.subTextContainer}>
        <Typography variant="subtitle2">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </Typography>
      </div>

      <div className={classes.reviewBox}>
        <Reviews />
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.buttonContainer}>
          <div className={classes.active}></div>
          <div className={classes.unactive}></div>
          <div className={classes.unactive}></div>
          <div className={classes.unactive}></div>
        </div>

        <div className={classes.arrows}>
          <div className={classes.arrowBack}>
            <ArrowBackIcon className={style.arrowLeft} />
          </div>

          <div className={classes.arrowForward}>
            <ArrowForwardIcon className={style.arrowRight} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Feedback;
