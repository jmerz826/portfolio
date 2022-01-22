import Header from "./components/header";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./components/homePage";

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
    </div>
  );
}

export default App;
