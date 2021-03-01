import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  },[props])

  return (
    <Router>

      <Switch>
        <Route path="/health">
          <p>ok</p>
        </Route>
        <Route path="/version">
          <p>4</p>
        </Route>
        <Route path="/">
          <div>
            <h2>Anecdotes Vekkulit</h2>
            <Filter />
            <Notification />
            <AnecdoteForm />
            <AnecdoteList />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default connect(null, { initializeAnecdotes })(App)