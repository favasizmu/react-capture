import React from "react";
import AboutUs from "../src/pages/aboutUs";
import ContactUs from "../src/pages/contactUs";
import OurWorks from "../src/pages/ourWork";
import NavSection from "../src/components/nav";
//
//styled
import GlobalStyles from "../src/components/globalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetails from "./pages/movieDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <NavSection />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWorks />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
