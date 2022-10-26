import React, { Component } from 'react'
import axios from 'axios';

export default class DoctorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutplan: {}
    };
  }

  componentDidMount() {
    const id =  this.props.match.params.id;
    axios.get(`/workout_plan/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          workoutplan:res.data.workout_plan
        });
        console.log(this.state.workoutplan);
      }
    });
  }

  render() {
    const { Plan_name, Workout_plan_ID, Bodyparts, Description, Day } = this.state.workoutplan;

    return (
      <div style = {{marginTop:'20px'}}>
        <h4>{Plan_name}</h4>
        <hr />
        <dl className="row">
          <dt className="col-sm-3">Plan_name</dt>
          <dd className="col-sm-9">{Plan_name}</dd>

          <dt className="col-sm-3">Workout_plan_ID</dt>
          <dd className="col-sm-9">{Workout_plan_ID}</dd>

          <dt className="col-sm-3">Bodyparts</dt>
          <dd className="col-sm-9">{Bodyparts}</dd>

          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">{Description}</dd>

          <dt className="col-sm-3">Day</dt>
          <dd className="col-sm-9">{Day}</dd>
        </dl>
      </div>
    )
  }
}