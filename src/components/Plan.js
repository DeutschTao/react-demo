import React, { Component } from 'react';
import storage from '../model/Storage';
import Header from './Header';
import { Link } from 'react-router-dom';

class Plan extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [
                {type:'上课', checked: false},
                {type:'吃饭', checked: true},
                {type:'看书', checked: false},
                {type:'听歌', checked: true},
                {type:'看电影', checked: false}
            ],
            planList: [
                {aId: 1, content: '规划1'},
                {aId: 2, content: '规划2'},
                {aId: 3, content: '规划3'},
                {aId: 4, content: '规划4'},
                {aId: 5, content: '规划5'},
            ]
        }
    }
    componentDidMount() {
        var list = storage.get('list');
        if(list){
            this.setState({
                list: list
            })
        }
    }
    keyUp = (e) => {
        if(e.keyCode === 13){
            var list = this.state.list;
            list.push({
                type: this.refs.plan.value,
                checked: false
            })
            this.setState({
                list: list
            })
            this.refs.plan.value = '';
            storage.set('list', list)
        }
        
    }
    change = (key) => {
         var tempList = this.state.list;
         tempList[key].checked = !tempList[key].checked;
         this.setState({
             list: tempList
         })
         storage.set('list', tempList)
    }
    cancel = (key) => {
        var tempList = this.state.list;
        tempList.splice(key, 1)
        this.setState({
            list: tempList
        })
        storage.set('list', tempList) 
    }
    render() {
        return(
            <div>
                <Header />
                输入计划：<input type="text" ref="plan" onKeyUp={this.keyUp}/>
                <hr />
                <h2>未完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if(!value.checked){
                                return (
                                    <li  key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.change.bind(this, key)}/>{value.type}
                                        <button onClick={this.cancel.bind(this, key)}>删除-</button>
                                    </li>
                                )
                            }  
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            if(value.checked){
                                return (
                                    <li  key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.change.bind(this, key)}/>{value.type}
                                        <button onClick={this.cancel.bind(this, key)}>删除-</button>
                                    </li>
                                )
                            }  
                        })
                    }
                </ul>
                <div>
                    <ul>
                        {this.state.planList.map((value ,key) => {
                            return (<li key={key}>
                                <Link to={`/planContent?aId=${value.aId}`}>{value.content}</Link>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Plan;