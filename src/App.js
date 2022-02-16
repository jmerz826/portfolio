import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./components/home/homePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/projects'>

        </Route>
        <Route path='/contact'>

        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
