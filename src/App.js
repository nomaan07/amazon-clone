import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "./store/index";

const Home = React.lazy(() => import("./components/Home"));
const Checkout = React.lazy(() => import("./components/Checkout"));
const Login = React.lazy(() => import("./components/Login"));
const Header = React.lazy(() => import("./components/Header"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
