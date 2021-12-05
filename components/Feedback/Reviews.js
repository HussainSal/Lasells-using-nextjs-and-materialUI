import classes from "../../styles/Feedback/Reviews.module.css";
import img1 from "../../Assets/Images/user1.png";
import img2 from "../../Assets/Images/user2.png";

import img3 from "../../Assets/Images/user3.png";

import star from "../../Assets/Images/star.svg";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  makeStyles,
} from "@material-ui/core";

const usestyle = makeStyles({
  cardHeader: {
    marginLeft: "10px",
    paddingBottom: "0px",
    fontWeight: "500",
  },
  card: {
    border: "2px solid #DDDDDD",
    borderRadius: "10px",
    height: "230px",
    width: "400px",
    transition: "All .4s",
    cursor: "pointer",

    "&:hover": {
      border: "2px solid #F53838",
    },
  },
});

function Reviews() {
  const style = usestyle();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Card className={style.card}>
          <CardHeader
            className={style.cardHeader}
            avatar={
              <div className={classes.avatar}>
                <Image alt="" src={img1} />{" "}
              </div>
            }
            title={
              <div className={classes.title}>
                <b>Viezh Robert</b>
              </div>
            }
            subheader="warsaw poland"
            action={
              <div className={classes.action}>
                {" "}
                4.5 <Image alt="" src={star} />{" "}
              </div>
            }
          ></CardHeader>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">
              Wow... I am very happy to use this VPN, it turned out to be moew
              than my expectations and so far there have been no problems.
              LaslesVPN always the best
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.card}>
        <Card className={style.card}>
          <CardHeader
            className={style.cardHeader}
            avatar={
              <div className={classes.avatar}>
                <Image alt="" src={img2} />{" "}
              </div>
            }
            title={
              <div className={classes.title}>
                <b>Yessica Christy</b>
              </div>
            }
            subheader="Shanxi,China"
            action={
              <div className={classes.action}>
                {" "}
                4.5 <Image alt="" src={star} />{" "}
              </div>
            }
          ></CardHeader>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">
              i like it because i like to travel fat and still can connect with
              high speed.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.card}>
        <Card className={style.card}>
          <CardHeader
            className={style.cardHeader}
            avatar={
              <div className={classes.avatar}>
                <Image alt="" src={img3} />{" "}
              </div>
            }
            title={
              <div className={classes.title}>
                <b>Kim Young Jou</b>
              </div>
            }
            subheader="Seoul,South Korea"
            action={
              <div className={classes.action}>
                {" "}
                4.5 <Image alt="" src={star} />{" "}
              </div>
            }
          ></CardHeader>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">
              This is very unusual for my business that currently requires a
              virtual private network that has high security.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Reviews;
