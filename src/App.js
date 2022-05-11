import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Home} />
              <Route path="/teachers" component={Teachers} />
              <Route path="/docs" component={Docs} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
