import classes from "../../styles/Plan/Plans.module.css";
import { Typography, makeStyles, Button } from "@material-ui/core";
import Image from "next/image";
import giftImage from "../../Assets/Images/gift.png";
import tick from "../../Assets/Images/tick.png";

const useStyles = makeStyles({
  heading: {
    textTransform: "capitalize",
  },
  text1: {
    fontSize: "18px",
    fontWeight: "500",

    marginBottom: "30px",
  },
  text2: {
    marginTop: "10px",
    textTransform: "capitalize",
    color: "#4F5665",
    width: "250px",
  },
  priceBox: {
    fontSize: "25px",
    fontWeight: "500",
  },
  subText: {
    marginTop: "20px",
    color: "#4F5665",
  },
  buttons: {
    fontSize: "16px",
    lineHeight: "18.96px",
    fontWeight: "500",
    width: "150px",
    height: "45px",
    border: "1px solid #F53855",
    borderRadius: "50px",
    color: "#F53855",
    margin: "20px auto 50px auto",
    textTransform: "capitalize",

    "&:hover": {
      background: "#F53838",
      color: "white",
    },
  },
});

function Plan() {
  const style = useStyles();

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.textBox}>
          <Typography variant="h2" className={style.heading}>
            choose your plan
          </Typography>
          <Typography className={style.subText} variant="subtitle2">
            Lets choose the package that is best for you and explore it happily
            and cheerfully
          </Typography>
        </div>

        <div className={classes.planContainer}>
          <div className={classes.box}>
            <div className={classes.image}>
              <Image alt="" src={giftImage} />
            </div>
            <Typography className={style.text1} variant="subtitle2">
              <b>Free Plan</b>
            </Typography>
            <div className={classes.contentBox}>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                unlimited bandwith
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                encrypted connection
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                No traffic logs
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                work on all devices
              </Typography>
            </div>
            <div className={classes.priceBox1}>
              <Typography className={style.priceBox} variant="body2">
                <b>Free</b>
              </Typography>
            </div>
            <Button className={style.buttons}>select</Button>
          </div>

          <div className={classes.box}>
            <div className={classes.image}>
              <Image alt="" src={giftImage} />
            </div>
            <Typography className={style.text1} variant="subtitle2">
              Standard Plan
            </Typography>
            <div className={classes.contentBox}>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                unlimited bandwith
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                encrypted connection
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                yes traffic logs
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                work on all devices
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                connect anywhere
              </Typography>
            </div>
            <div className={classes.priceBox2}>
              <Typography className={style.priceBox} variant="body2">
                <b>$9</b> <div className={classes.mo}>/ mo</div>
              </Typography>
            </div>
            <Button className={style.buttons}>select</Button>
          </div>

          <div className={classes.box}>
            <div className={classes.image}>
              <Image alt="" src={giftImage} />
            </div>
            <Typography className={style.text1} variant="subtitle2">
              Premium Plan
            </Typography>
            <div className={classes.contentBox}>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                unlimited bandwith
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                encrypted connection
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                yes traffic logs
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                work on all devices
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                connect anywhere
              </Typography>
              <Typography variant="body2" className={style.text2}>
                <span className={classes.span}>
                  <Image alt="" src={tick} />
                </span>{" "}
                get new features
              </Typography>
            </div>
            <div className={classes.priceBox}>
              <Typography className={style.priceBox} variant="body2">
                <b>$12</b>
                <div className={classes.mo}> / mo</div>
              </Typography>
            </div>
            <Button className={style.buttons}>select</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plan;
