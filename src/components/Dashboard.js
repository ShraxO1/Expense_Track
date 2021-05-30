import "../dashboard.css"
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {Balance} from './Balance';
import {IncomeExpenses} from "./IncomeExpenses";
import {TransactionList} from "./TransactionList";
import {AddTransaction} from "./AddTransaction";
import {GlobalProvider} from "../contexts/GlobalState";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Expense Tracker</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>User:</strong> {currentUser.email}
          <GlobalProvider>
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
          </GlobalProvider>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
        <Button className="btn btn-danger" onClick={handleLogout}>
          Log Out
        </Button>
    </>
  )
}
