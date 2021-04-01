import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import ShowPage from './components/ShowPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/pokemon/:id" component={ShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
