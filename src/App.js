import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import EditContent from "./components/EditContent";
import Navbar from "./components/Navigation/Navbar";
import ProtectRoute from "./components/Navigation/ProtectRoute";

import NotAdmin from "./components/NotAdmin";
import AddExpense from "./pages/expense/AddExpense";
import EditExpense from "./pages/expense/EditExpense";
import ExpensesList from "./pages/expense/ExpensesList";
import Home from "./pages/Home";
import AddIncome from "./pages/income/AddIncome";
import IncomeList from "./pages/income/IncomeList";
import DashboardData from "./pages/users/DashboardData";
import Login from "./pages/users/Login";
import Profile from "./pages/users/Profile";
import Register from "./pages/users/Register";
import UpdateProfile from "./pages/users/UpdateProfile";
import UserProfileExpList from "./pages/users/UserProfileExpList";
import UserProfileIncList from "./pages/users/UserProfileIncList";

import {Chart, ArcElement} from 'chart.js';
Chart.register(ArcElement);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectRoute exact path="/expenses" component={ExpensesList} />
        <ProtectRoute exact path="/incomes" component={IncomeList} />
        <ProtectRoute exact path="/edit" component={EditContent} />
        <ProtectRoute
          exact
          path="/update-profile"
          component={UpdateProfile}
        />
        <ProtectRoute
          exact
          path="/user-expenses"
          component={UserProfileExpList}
        />
        <ProtectRoute
          exact
          path="/user-income"
          component={UserProfileIncList}
        />
        <ProtectRoute exact path="/dashboard" component={DashboardData} />
        <Route exact path="/not-found" component={NotAdmin} />
        <ProtectRoute exact path="/add-income" component={AddIncome} />
        <ProtectRoute exact path="/edit-expense" component={EditExpense} />
        <ProtectRoute exact path="/add-expense" component={AddExpense} />
        <ProtectRoute exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;