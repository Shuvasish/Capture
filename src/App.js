// import pages
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Switch>
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
    </div>
  );
}

export default App;
