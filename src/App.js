// import pages
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { Switch, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import MovieDetails from "./pages/MovieDetails";

//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/work">
            <OurWork></OurWork>
          </Route>
          <Route path="/work/:id">
            <MovieDetails></MovieDetails>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
