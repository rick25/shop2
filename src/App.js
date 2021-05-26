import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import store from "./data/DataStore";
import { ShopConnector } from "./shop/ShopConnector";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
