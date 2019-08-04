import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Denglu extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>下载/注册</NavLink>
                <NavLink to='/home'>登录/注册</NavLink>
            </div>
        )
    }
}
