import React, { Component } from 'react'
import './index.scss'
export default class Html extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true,
            display: 'none',
            textarea: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    // 显示隐藏
    handleClick(){
        this.setState({
            isToggleOn:!this.state.isToggleOn,
            display: this.state.isToggleOn ? 'block': 'none'
        })
    }
    // 文本域不能为空
    onHandleChange = ({target}) =>{
        this.setState({
            [target.name]: target.value
        })
        // console.log(target.value)
    }
    // 发布
    onPublish(){
        if(this.state.textarea === ''){
            alert('请输入日志内容！')
        }else{
            alert('发布成功！')
        }
    }
    render() {
        let { textarea } = this.state
        return (
            <div className='publish-box'>
                <div className='publish-center'>
                    <div className='publish-select'>
                        <div className='select select-left'>
                            <select defaultValue="publish" className='choose'>
                                <option defaultValue="home" className='option'>LOFTER首页</option>
                                <option defaultValue="publish" className='option'>发布文章</option>
                                <option defaultValue="like" className='option'>喜欢的文章</option>
                            </select>
                        </div>
                        <div className='select select-right'>
                            <select defaultValue="text" className='choose'>
                                <option defaultValue="text" className='option'>发布文字</option>
                                <option defaultValue="img" className='option'>发布图片</option>
                            </select>
                        </div>
                    </div>
                    <div className='content'>
                        <input className='title' type="text" placeholder="文章标题"/>
                        <textarea className='main' placeholder='正文' value={textarea} name='textarea' onChange={this.onHandleChange}></textarea>
                        <div className='options'>
                            <div className='show' onClick={this.handleClick}>
                                <div className='icon'></div>
                                <div className='box'>
                                    <h5 className='chose'>选项</h5>
                                    <p className='rel'>发布到：sf的博客</p>
                                </div>
                            </div>
                            <div className='hides' style={{display: this.state.display}}>
                                <div className='item'>
                                    <p className='p1'>发布到：</p>
                                    <select defaultValue="sf" className='choose1'>
                                        <option defaultValue="sf" className='option1'>sf的博客</option>
                                    </select>
                                </div>
                                <div className='item'>
                                    <p className='p1'>设置</p>
                                    <select defaultValue="mow" className='choose1'>
                                        <option defaultValue="now" className='option1'>立即发布</option>
                                        <option defaultValue="keep" className='option1'>保存草稿</option>
                                        <option defaultValue="own" className='option1'>尽自己可见</option>
                                    </select>
                                </div>
                                <div className='item'>
                                    <p className='p1'>标签</p>
                                    <input type="text"  className='choose1' placeholder='添加标签，用逗号或回车分隔'/>
                                </div>
                            </div>
                        </div>
                        <button className='btn' type='submit' onClick={this.onPublish.bind(this,this.state.textarea)}>发布</button>
                    </div>
                </div>
            </div>
        )
    }
}
