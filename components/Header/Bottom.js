import { Typography, makeStyles } from "@material-ui/core";
import users from "../../Assets/Images/user.png";
import location from "../../Assets/Images/location.png";
import server from "../../Assets/Images/Server.png";
import classes from "../../styles/Header/Bottom.module.css";
import Image from "next/image";

const useStyle = makeStyles({
  rating: {
    fontSize: "2px",
    lineHeight: "30px",
  },
});

function Bottom() {
  const style = useStyle();

  return (
    <div className={classes.subContainer1}>
      <div className={classes.box}>
        <Image alt="" src={users} />
        <Typography variant="body1">
          <b>90+</b>
          <br />
          users
        </Typography>
      </div>
      <div className={classes.border1} />
      <div className={classes.box2}>
        <Image alt="" src={location} />
        <Typography variant="body1">
          <b>30+ </b> <br />
          Locations
        </Typography>
      </div>

      <div className={classes.border2} />
      <div className={classes.box3}>
        <Image alt="" src={server} />
        <Typography variant="body1">
          <b>50+</b>
          <br />
          Servers
        </Typography>
      </div>
    </div>
  );
}

export default Bottom;
