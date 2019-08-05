import React, { Component } from 'react'
import './index.css'
// import Denglu from './denglu'
// import Home from './home'
import { NavLink } from 'react-router-dom'

export default class Getinto extends Component {
    render() {
        return (
            // <BrowserRouter>
                <div className='Getinto'>
                    {/* <Route path='/' component={() => <Denglu/>}/> */}
                    <div>
                        <h1 className='logo'>1</h1>
                    </div>
                    <div className='niemargin'>
                        <div className='Getinto-font'>
                            <p>
                                下载/App
                            </p>
                        </div>
                        <div className='Getinto-font'>
                            <p>
                                <NavLink to='/denglu/dl'>登录/注册</NavLink>
                            </p>
                        </div>
                        <div className='fontnie'>Wallpaper from SONGTSE</div>
                    </div>
                </div>
            // </BrowserRouter>
        )
    }
}
