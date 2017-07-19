import React, { Component } from 'react';
import axios from 'axios';
import CamperTable from "./table"
import MDSpinner from "react-md-spinner";

export default class App extends Component {
  constructor(){
    super();
    this.fetchData();  //write this function into constructor, then it can be called at very beginning.
    this.state={
      alltime:[],
      recent:[],
      curentstatus:"alltime"
    };
  }
  get30daysdata() {
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
  getalldata() {
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }
  fetchData(){
    axios.all([this.get30daysdata(),this.getalldata()])
        .then(axios.spread((recent,alltime)=>{
          this.setState({
              recent:recent.data,
              alltime:alltime.data
          });
        }));
  }


  changstatus(status){
    this.setState({
        curentstatus:status
    });
  }

  render() {
    if(!this.state.alltime.length&&!this.state.recent.length){
        return(
            <div className="spinner">
                <MDSpinner  size={100}/>
            </div>
        );
    }


    return (
      <div>
        <h1>Camper Board List</h1>
        <button onClick={()=>this.changstatus("recent")} className="btn btn-primary">30days</button>
        <button onClick={()=>this.changstatus("alltime")} className="btn btn-primary">all</button>
          <br/><br/>
          <h2>{`${this.state.curentstatus} rank table`}</h2>
        <CamperTable data={this.state[this.state.curentstatus]}/>
      </div>
    );
  }
}
