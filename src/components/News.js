import React, { Component } from 'react';
import '../assets/css/News.css'
import Header from './Header'
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props)
        console.log('01构造函数')
        this.state = {
            listName: '新闻传给头部子组件的列表名',
            color: 'red',
            list: [
                {aId: 1, content: '新闻1'},
                {aId: 2, content: '新闻2'},
                {aId: 3, content: '新闻3'},
                {aId: 4, content: '新闻4'},
                {aId: 5, content: '新闻5'},
            ]
        }
    }
    componentWillMount(){
        console.log('02组建将要挂载')
    }
    componentDidMount(){
        console.log('04组建挂载完成')
    }
    shouldComponentUpdate() {
        console.log('001组件是否需要更新')
        return true;
    }
    componentWillUpdate(){
        console.log('002组件将要更新')
    }
    componentDidUpdate(){
        console.log('004组件更新完毕')
    }
    getFromSon = (d)=> {
        console.log(d)
    }
    getSon = ()=> {
        console.log(this.refs.Son)
    }
    update = ()=> {
        this.setState({
           color:'black' 
        })
    }
    render () {
        console.log('03渲染组件')
        return (
            <ul>
                <Header title={this.state.listName} get={this.getFromSon} num="asfs" ref="Son"/>
                {/* <li>{this.state.listName}</li>
                <li title={this.state.listName}>列表1</li>
                <li className={this.state.color}>列表1</li>
                <li>列表1</li> */}
                <button onClick={this.update}>更新</button>
                <button onClick={this.getSon}>获取子组件</button>
                {this.state.list.map((value ,key) => {
                    return (<li key={key}>
                        <Link to={`/newsContent/${value.aId}`}>{value.content}</Link>
                    </li>)
                })}
            </ul>
        )
    }
}

export default News;