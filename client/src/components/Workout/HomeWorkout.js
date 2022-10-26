import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
constructor(props) {
    super(props);
    this.state = {  
      workout_plans:[]
    };
  }
componentDidMount(){
  this.retrieveworkout_plan();
}
  retrieveworkout_plan(){
    axios.get("/workout_plan").then(res => {
      if(res.data.success){
        this.setState({   
          workout_plans:res.data.existingworkout_plan

      });
      console.log(this.state.workout_plans)
    }
  });
}

onDelete = (id) => {
  axios.delete(`/workout_plan/delete/${id}`).then((res) => {
    alert("Woekout deleted successfully");
    this.retrieveworkout_plan();
    })
  }

filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.Plan_name.toLowerCase().includes(searchKey)
    )
    this.setState({workout_plans:result})
  }

handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("/workout_plan").then(res => {
      if(res.data.success){
        this.filterData(res.data.existingworkout_plan,searchKey)
    }
  });
  
  }

  render() {
    return (
      
      <div className="container">
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
            <h4>All Meal Plans</h4>
            </div>
            <div className='col-lg-3 mt-2 mb-2'>
               <input 
               className='form-control' 
               type='search' 
               placeholder='Search' 
               name='SearchQuery'
               onChange = {this.handleSearchArea}>
               </input>
            </div>
        </div>
        <table className = "table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Plan name</th>
            <th scope="col">Plan ID</th>
            <th scope="col">Bodyparts</th>
            <th scope="col">Description</th>
            <th scope="col">Day</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.workout_plans.map((workout_plans,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/workout_plan/${workout_plans._id}`} style={{textDecoration:'none'}}> {workout_plans.client_name}</a>
                
              </td>
                <td>{workout_plans.Plan_name}</td>
                <td>{workout_plans.Workout_plan_ID}</td>
                <td>{workout_plans.Bodyparts}</td>
                <td>{workout_plans.Description}</td>
                <td>{workout_plans.Day}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${workout_plans._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(workout_plans._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>

            </tr>
          ))}
        </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create Meal Plan</a></button>
      </div>
    )
  }
}