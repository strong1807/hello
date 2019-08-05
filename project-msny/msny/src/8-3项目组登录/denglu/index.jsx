import React, { Component } from 'react'

export default class Denglu extends Component {
    constructor(){
        super()
        // 初始state
        this.state = {
            phone: "",
            passWord: ""
        };
    }
      // onchange事件
        onHandleChange = event => {
            let { target } = event;
            console.log(target.value)
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
            // 验证密码
            if(this.state.passWord.length<6 || this.state.passWord.length>16){
                return alert('密码要6~16位哦⛄')
            }
            //成功
            alert('登录成功，棒棒的')
            window.location.replace('/show')
        }
    render() {
        const{phone,passWord} = this.state
        return (
            <div>
                {/* 登录页面 */}
                <ul>
                    <li>
                        <input type="text" 
                            name="phone"
                            value={phone}
                            onChange= {this.onHandleChange}
                            placeholder=' 手机号（中国大陆）'/>
                    </li>
                    <li>
                        <input type="password" 
                            name="passWord"
                            value={passWord}
                            onChange={this.onHandleChange}
                            placeholder=' 设置密码（6~16位）'/>
                    </li>
                </ul>
                <button className='inputdl' onClick={this.tijiao}>登录</button>
            </div>
        )
    }
}
