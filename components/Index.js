import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Features from "./Features/Features";
import Plan from "./Plans/Plan";
import Network from "./Network/Network";
import Feedback from "./Feedback/Feedback";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Subscribe/Footer";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";

function Index() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Header />
        <div className="divider" />
        <Features />
        <div className="divider" />
        <Plan />
        <div className="divider" />
        <Network />
        <div className="divider" />
        <Feedback />
        <div className="divider" />
        <Subscribe />
        <div className="divider" />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Index;
