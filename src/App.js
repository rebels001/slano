import './App.sass';
import './SinglePage.sass';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Dubrovnik from "./pages/Dubrovnik"
import Elaphiti from './pages/Elaphiti'
import Ston from "./pages/Ston"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dubrovnik" component={Dubrovnik} />
        <Route path="/elaphiti" component={Elaphiti} />
        <Route path="/ston" component={Ston} />
      </Switch>
    </Router>
  );
}

export default App;
