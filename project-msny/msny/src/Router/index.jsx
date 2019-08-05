import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Getinto from '../getinto/index'
import Login from '../8-3项目组登录/index'
import Show from '../components/index'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={Getinto}/>
                <Route path='/denglu' component={Login}/>
                <Route path='/show' component={Show}/>
            </BrowserRouter>
        )
    }
}
