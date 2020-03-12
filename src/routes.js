import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from "history/createBrowserHistory";

import AllFlags from './components/allFlags'
import FlagDetails from "./components/flag";

export default function router(){
    return(
        <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
            <Switch>
                <Route exact path='/' component={AllFlags}/>
                <Route path='/:name' component={FlagDetails}/>
            </Switch>
        </Router>
    )
}