import React, { Component } from 'react'
// import { Route,NavLink } from 'react-router-dom'
import './index.scss'
// import Homepage from '../homepage'


export default class Footer extends Component {
    render() {
        return (
            <div className='footer flex'>
                <div className='backIndex'>
                    <p>
                        LOFTER首页
                        {/* <NavLink path='/homepage' component={Homepage}>LOFTER首页</NavLink> */}
                        {/* <Route path='/homepage' component={Homepage}/> */}
                    </p>
                </div>
                <div className='signOut'>
                    <p>退出</p>
                </div>
                <div className='signOut'>
                    <p>PC视图</p>
                </div>
            </div>
        )
    }
}
