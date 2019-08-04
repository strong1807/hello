import React, { Component } from 'react'
import './index.scss'
import Footer from '../footer'

export default class Header extends Component {
    constructor(){
        super()
        this.state= {
            value : '' //下拉框option默认值
        }
    }
    // 设置option默认值
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className='header'>
                <div className='header-bigdiv'>
                    {/* 头部logo图片 */}
                    <img src={ `${process.env.PUBLIC_URL}/img/header-logo.png` } alt=""/>
                    <select value='like' onChange={this.handleChange}>
                        <option>LOFTER首页</option>
                        <option>发布文章</option>
                        <option value='like'>喜欢的文章</option>
                    </select>
                </div>
                <div className='nocontent'>
                    <p>暂无内容</p>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
