import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wallet from "./Page/Wallet";
import Home from "./Page/Home";
import Subscription from "./Page/Subscription";
import Subscription2 from "./Page/Subscription2";
import Crew from "./Page/Crew";
import Crew2 from "./Page/Crew2";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Wallet} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Subscription" component={Subscription} />
          <Route exact path="/Subscription2" component={Subscription2} />
          <Route exact path="/Crew" component={Crew} />
          <Route exact path="/Crew2" component={Crew2} />
        </div>
      </Router>
    </div>
  );
}

export default App;
