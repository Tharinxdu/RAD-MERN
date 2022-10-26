import React, { Component } from 'react'
import axios from 'axios';

export default class Createworkout_plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Plan_name: "",
      Workout_plan_ID: "",
      Bodyparts: "",
      Description: "",
      Day: ""
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { Plan_name, Workout_plan_ID, Bodyparts, Description, Day } = this.state;

    const data = {
      Plan_name: Plan_name,
      Workout_plan_ID: Workout_plan_ID,
      Bodyparts: Bodyparts,
      Description: Description,
      Day: Day,
    };

    console.log(data)
    axios.post("/workout_plan/save",data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            Plan_name: "",
            Workout_plan_ID: "",
            Bodyparts: "",
            Description: "",
            Day: "",
          })
        }    
      })
    }
  render() {
    return (
      
        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Create New Workout Plan</h1>
          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Plan_name</label>
              <input
                type='text'
                className='form-control'
                name='Plan_name'
                placeholder='Enter Plan Name'
                value={this.state.Plan_name}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Workout_plan_ID</label>
              <input
                type='text'
                className='form-control'
                name='Workout_plan_ID'
                placeholder='Enter Workout_plan_ID'
                value={this.state.Workout_plan_ID}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Bodyparts</label>
              <input
                type='text'
                className='form-control'
                name='Bodyparts'
                placeholder='Enter Bodyparts'
                value={this.state.Bodyparts}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Description</label>
              <input
                type='text'
                className='form-control'
                name='Description'
                placeholder='Enter Description'
                value={this.state.Description}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Day</label>
              <input
                type='text'
                className='form-control'
                name='Day'
                placeholder='Enter Day'
                value={this.state.Day}
                onChange={this.handleInputChange}/>
            </div>
            <button
              className='btn btn-success'
              type='submit'
              style={{ marginTop: '15px' }}
              onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Save
            </button>
        </form>
      </div>
    )
  }
}
