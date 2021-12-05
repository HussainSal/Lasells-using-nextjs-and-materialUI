import { Typography, makeStyles } from "@material-ui/core";
import classes from "../../styles/Network/Network.module.css";
import Image from "next/image";
import map from "../../Assets/Images/map.png";

import netflix from "../../Assets/Images/netflix.png";
import amazon from "../../Assets/Images/amazon.png";
import reddit from "../../Assets/Images/reddit.png";
import discord from "../../Assets/Images/discord.png";
import spotify from "../../Assets/Images/spotify.png";

const useStyles = makeStyles({
  headline: {
    textTransform: "capitalize",
  },
});

function Network() {
  const style = useStyles();

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <Typography className={style.headline} variant="h2">
            huge global network <p className={classes.para}>of</p> fast VPN
          </Typography>
        </div>

        <div className={classes.subTextContainer}>
          <Typography variant="subtitle2">
            see <b>LaslesVPN</b> everywhere to make it easier for you when you
            move locations.
          </Typography>
        </div>

        <div className={classes.map}>
          <Image alt="" src={map} />
        </div>
        <div className={classes.logoContaienr}>
          <div className={classes.netflix}>
            <Image alt="" src={netflix} />
          </div>

          <div className={classes.reddit}>
            <Image alt="" src={reddit} />
          </div>

          <div className={classes.other}>
            <Image alt="" src={amazon} />
          </div>

          <div className={classes.other}>
            <Image alt="" src={discord} />
          </div>

          <div className={classes.other}>
            <Image alt="" src={spotify} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Network;
