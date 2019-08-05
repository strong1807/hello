import React, { Component } from 'react'
import Footer2 from '../footer2/index'
export default class Footer extends Component {
    constructor(){
        super()
        this.state={
            isShow: true
        }
    }
    // 控制底下的显示隐藏
    handleOnClick=()=>{
        switch(this.state.isShow){
            case true:
            return this.setState({
                isShow:false
            })
            case false:
            return this.setState({
                isShow:true
            })
        }
    }
    Show(){
        switch(this.state.isShow){
            case true:
            return <Footer2/>
            case false:
            return 
        }
    }
    render() {
        return (
            <div className='footerbox'>
                <p onClick={this.handleOnClick}>社交账号登录</p>
                {
                    this.Show()
                }
            </div>
        )
    }
}