import React from "react";
import { Nav } from "./components/Nav";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { ContactMe } from "./components/ContactMe";
import { Home } from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className='h-screen w-screen  '>
      <Router>
        <div className='h-12 w-full bg-red-300 hover:shadow-2xl ring-red-500'>
          <Nav />
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/education'>
            <Education />
          </Route>
          <Route path='/experience'>
            <Experience />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/contact'>
            <ContactMe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
