import './App.sass';
import './SinglePage.sass';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import SubPages from "./pages/SubPages"
import Navbar from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/:subpageParam" component={SubPages} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
