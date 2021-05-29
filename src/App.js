import './App.css';
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import { Container } from "react-bootstrap";
import {Balance} from './components/Balance';
import {Header} from "./components/header";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
      >
          <div className="w-100" style={{ maxWidth: "400px" }}>
              <Router>
                  <AuthProvider>
                      <Switch>
                          <PrivateRoute exact path="/">
                                <div>
                                  <Header/>
                                  <GlobalProvider>
                                      <Balance/>
                                      <IncomeExpenses/>
                                      <TransactionList/>
                                      <AddTransaction/>
                                  </GlobalProvider>
                                </div>
                          </PrivateRoute>
                          <Route path="/signup" component={Signup} />
                          <Route path="/login" component={Login} />
                          <Route path="/forgot-password" component={ForgotPassword} />
                      </Switch>
                  </AuthProvider>
              </Router>
          </div>
      </Container>
  );
}

export default App;
