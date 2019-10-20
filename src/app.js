import React from 'react'

import Layout from './layout.js';
import { connect } from 'react-redux';

import * as actions from './actionCreator';

class App extends React.Component{
    componentDidMount(){
        this.props.loadData();
    }
    render(){
    const {mylist,recommendationList,RemoveHandler,AddHandler} = this.props
    return (
        <div>
            
            <Layout listName="My List" list={mylist} eventhandler={RemoveHandler}></Layout>
            <Layout listName="Recommendation" list={recommendationList} eventhandler={AddHandler}></Layout>
            <h2>movie List</h2>
             <ul>
                {mylist.map(item=><li key={item.id}>{item.title}</li>)}
            </ul>
        </div>  
    )
    }
}
// transform the current Redux store state into props then can be passed to component
const mapStateToProps=(state)=>{
    return {
        mylist : state.myList,
        recommendationList: state.recommendationList,
    };
};
// return a callback function can be used in the component
const mapDispatchToProps=(dispatch)=>{
    return {
        loadData: ()=>{dispatch(actions.fetchData())},
        RemoveHandler:data=>{
            return dispatch(actions.remove(data))
        },
        AddHandler: data=>{
            return dispatch(actions.add(data));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
  
    
  