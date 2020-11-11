import './App.css';
import {Balance} from './components/Balance';
import {Header} from "./components/header";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <div>
      <Header/>
      <GlobalProvider>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
      </GlobalProvider>
    </div>
  );
}

export default App;
