import Header from "./components/header";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <h2>path</h2>
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
