import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/homePage";
import ContactPage from "./components/contactPage";
import { NewHomePage } from "./components/v2/NewHomePage";
import Projects from "./components/projectsPage/projects";

const isV2 = window.location.href.includes("v2");

function App() {
  return (
    <div className="App">
      {!isV2 && <Header />}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/v2">
          <NewHomePage />
        </Route>
      </Switch>
      {!isV2 && <Footer />}
    </div>
  );
}

export default App;
