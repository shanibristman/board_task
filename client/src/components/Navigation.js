import React from 'react'
import {BrowserRouter ,Switch, Route, Routes } from 'react-router-dom';

import Home from './Home';
import LogIn from './LogIn';
import Tasks from './Tasks';


export default function Navigation() {
  return (
    <Switch>
        <Route  exact path='/' component= {LogIn} />
        <Route  exact path='/board' component= {Tasks} />
        <Route  exact path='/home' component= {Home} />
    </Switch>
  )
}