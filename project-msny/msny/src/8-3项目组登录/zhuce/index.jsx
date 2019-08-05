import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
export default class Zhuce extends Component {
    constructor(props){
        super(props)
        // 初始state
        this.state = {
            phone: "",
            passWord: "",
            yzm: "",
            phoneyzm:''
        };
    }
      // onchange事件
      onHandleChange = event => {
        let { target } = event;
        // console.log(target.value)
        // 赋值的时候用es6对象新特性去做
        this.setState({
            [target.name]: target.value
        });
    };

    // 点击提交验证
    tijiao=()=>{
        //验证手机号
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.state.phone==='' || !reg.test(this.state.phone)){
            return alert('请您输入正确的手机账号💗')
        }
        // 验证验证码
        if(this.state.yzm ==='' || this.state.yzm != '7364'){
            return alert('验证码错啦QAQ！😭')
        }
        // 验证手机验证码
        if(this.state.phoneyzm.length != 4 || this.state.phoneyzm === '' || this.state.phoneyzm.type === Number){
            return alert('请再核对下短信验证码哦~4位而且都是数字🐷')
        }
        // 验证密码
        if(this.state.passWord.length<6 || this.state.passWord.length>16){
            return alert('密码要6~16位哦⛄')
        }
        //成功
            // 我这里写的注册成功之后自动跳到登录页面
            // 你们整理的时候把下面的路由变成首页的，就是注册成功后直接进入首页
            alert('恭喜您注册成功 快去体验吧🥇')
            window.location.replace('/dl')
        
    }
    render() {
        const{phone,passWord,yzm,phoneyzm} = this.state
        return (
            <div>
                <ul>
                    {/* 注册页面 */}
                    <li>
                        {/* 手机号 */}
                        <input 
                            name="phone"
                            value={phone}
                            onChange= {this.onHandleChange}
                            type="text" placeholder=' 手机号（中国大陆）'/>
                    </li>
                    <li>
                        {/* 验证码 */}
                        <input 
                            name="yzm"
                            value={yzm}
                            onChange= {this.onHandleChange}
                            type="text" 
                            placeholder=' 图片验证码'
                            style={{width:'30%',float:'left'}}/>
                        <img src={`${process.env.PUBLIC_URL}/yjnyzm.jpg`}/>
                        <p style={{height:'100%',lineHeight:'40px',paddingTop:'35px'}}>换一张</p>
                    </li>
                    <li>
                        {/* 手机验证码 */}
                        <input
                            name="phoneyzm"
                            value={phoneyzm}
                            onChange= {this.onHandleChange}
                            style={{width:'75%',float:'left',border:'none'}} 
                            type="text" 
                        placeholder=' 验证码'/>
                        <p style={{height:'100%',lineHeight:'40px',paddingTop:'29px',borderBottom:'2px solid #CFCFCF'}}>发送验证码</p>
                    </li>
                    <li>
                        {/* 设置密码 */}
                        <input
                            name="passWord"
                            value={passWord}
                            onChange= {this.onHandleChange}
                            type="password" 
                            placeholder=' 设置密码（6~16位）'/>
                    </li>
                </ul>
                <button className='inputzc' onClick={this.tijiao}>注册</button>
            </div>
        )
    }
}
