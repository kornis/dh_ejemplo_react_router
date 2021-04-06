import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Principal from './pages/principal';
import About from './pages/about';
import DetalleGif from './pages/detallegif';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route path="/detalle/:id" component={DetalleGif} />
        <Route path="/about" component={About} />
        <Route><h1>Not Found</h1></Route>
      </Switch>
    </Router>
  );
}

export default App;
