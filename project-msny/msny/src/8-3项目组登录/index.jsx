import React, { Component } from 'react'
import './index.scss'
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
import Zhuce from './zhuce/index'
import Denglu from './denglu/index'
import Footer from './footer/index'
export default class Html extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <BrowserRouter>
                <header className='yjn-header'>
                    <img src={`${process.env.PUBLIC_URL}/yjnlogo.png`}/>
                </header>
                {/* 登录注册点击按钮 */}
                <div className='yjn-dlzc'>
                    <ul>
                        <li><NavLink to='/zc' activeClassName='activedlzc'>注册</NavLink></li>
                        <li><NavLink to='/dl' 
                             isActive={(match,location)=>{
                                if(match || location.pathname === '/'){
                                    return true;
                                }
                                return false
                            }}
                            activeClassName='activedlzc'>登录</NavLink></li>
                    </ul>
                </div>
                {/* 登录注册input框 */}
                <main className='yjnmain'>
                        <Route path='/' exact component={()=><Denglu/>}/>
                        <Route path='/dl' component={()=><Denglu/>}/>
                        <Route path='/zc' component={()=><Zhuce/>}/>
                </main>
                {/* 页面下面的社交账号登录 */}
                <Footer/>
            </BrowserRouter>
        )
    }
}
