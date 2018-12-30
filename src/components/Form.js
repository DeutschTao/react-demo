import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            sex: '1',
            city: '',
            citys: ['北京', '上海', '深圳'],
            hobby: [{type: '看书', checked: false}, {type: '听歌', checked: true}, {type: '睡觉', checked: false}],
            info: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleHobby = (key)=> {
        var hobby = this.state.hobby
        hobby[key].checked = !hobby[key].checked
        this.setState({
            hobby: hobby
        })
    }
    handleInfo = (e) => {
        this.setState({
            info: e.target.value
        })
    }
    render() {
        return(
            <div>
                <h2>表单列表a</h2>
                <form onSubmit={this.handleSubmit}>
                    用户名：<input type='text' value={this.state.name} onChange={this.handleName}/> 
                    <br />
                    性别：男<input type='radio' value='1' checked={this.state.sex === '1'} onChange={this.handleSex}/>
                         女<input type='radio' value='2' checked={this.state.sex === '2'} onChange={this.handleSex}/> 
                    <br />
                    居住城市：<select value={this.state.city} onChange={this.handleCity}>
                        {this.state.citys.map(function(value, key){
                            return (<option key={key}>{value}</option>)
                        })}
                    </select>
                    <br />
                    爱好：{this.state.hobby.map((value, key) => {
                        return(<span key={key}><input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this, key)}/>{value.type}</span> )
                    })}
                    <br />
                    备注：<input type="textarea" value={this.state.info} onChange={this.handleInfo}/>
                    <br />
                    <input type='submit' defaultValue="提交"/>
                </form>
            </div>
        )
    }
}

export default Form;