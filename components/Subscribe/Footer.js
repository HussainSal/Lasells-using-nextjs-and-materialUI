import classes from "../../styles/Subscribe/Footer.module.css";
import Image from "next/image";
import logo from "../../Assets/Images/lasellsLogo.png";
import { Typography, makeStyles } from "@material-ui/core";
import facebook from "../../Assets/Images/facebook.png";
import instagram from "../../Assets/Images/instagram.png";
import twitter from "../../Assets/Images/twitter.png";

const useStyle = makeStyles({
  type: {
    // marginLeft: "11px",
    marginTop: "5px",
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "23.7px",
  },
  heading: {
    color: "#4F5665",
  },
  label: {
    color: "#AFB5C0",
  },
  text: {
    textTransform: "capitalize",
    width: "110px",
    color: "#4F5665",
    marginTop: "20px",
  },
});

function Footer() {
  const style = useStyle();

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <div>
            <div className={classes.container1}>
              <Image alt="" src={logo} />
              <Typography className={style.type}>
                Lasles<b>VPN</b>
              </Typography>
            </div>
            <Typography
              className={`${style.heading} ${classes.subContainer}`}
              variant="body2"
            >
              <b>Lasles VPN</b> is a private virtual network that has unique
              features and has high security.
            </Typography>
            <div className={classes.imageContainer}>
              <Image alt="" src={facebook} />
              <Image alt="" src={twitter} />
              <Image alt="" src={instagram} />
            </div>
            <Typography className={style.label} variant="body2">
              @2020Lasles<b>VPN</b>
            </Typography>
          </div>

          <div className={classes.textContainer}>
            <div className={classes.textrow1}>
              <Typography variant="body1">Product</Typography>
              <Typography className={style.text} variant="body2">
                pricing locations server countries blog
              </Typography>
            </div>

            <div className={classes.textrow2}>
              <Typography variant="body1">Engage</Typography>
              <Typography className={style.text} variant="body2">
                laslesVPN <br /> faq <br /> tutorials <br /> about us <br />{" "}
                privacy policy <br />
                terms of service
              </Typography>
            </div>

            <div className={classes.textrow3}>
              <Typography variant="body1">Earn Money</Typography>
              <Typography className={style.text} variant="body2">
                affiliate become partner
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
