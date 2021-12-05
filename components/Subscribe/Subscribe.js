import { Button, Typography, makeStyles } from "@material-ui/core";
import classes from "../../styles/Subscribe/Subscribe.module.css";

const useStyle = makeStyles({
  mainHeading: {
    marginBottom: "20px",
    maxHeight: "80px",
    textTransform: "capitalize",
  },
  button: {
    fontWeight: "700",
    fontSize: "16px",
    width: "250px",
    height: "60px",
    background: "#F53838",
    marginTop: "50px",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      background: "#F53838",
    },
    subHeading: {
      color: "#4F5665",
      fontSize: "16px",
    },
  },
});

function Subscribe() {
  const style = useStyle();

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.containerSubscribe}>
          <div className={classes.textContainer}>
            <Typography className={style.mainHeading} variant="h2">
              subscribe now <p className={classes.para}>for</p> get special
              features!
            </Typography>

            <Typography className={style.subHeading} variant="body2">
              Lets subscribe with us and find the fun
            </Typography>
          </div>
          <div className={classes.button}>
            <Button
              disableElevation
              className={`${style.button} ${classes.getStarted} `}
              variant="contained"
            >
              subscribe now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
