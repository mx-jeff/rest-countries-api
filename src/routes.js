import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AllFlags from './components/allFlags'
import FlagDetails from "./components/flag";

export default function router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={AllFlags}/>
                <Route path='/:name' component={FlagDetails}/>
            </Switch>
        </BrowserRouter>
    )
}