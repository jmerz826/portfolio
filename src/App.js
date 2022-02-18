import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./components/home/homePage";
import ContactPage from "./components/contactPage";
import Projects from "./components/projectsPage/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
