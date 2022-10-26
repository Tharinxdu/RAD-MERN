import React, { Component } from 'react'
import axios from 'axios';

export default class MealDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {}
    };
  }
 
  componentDidMount() {
    const id =  this.props.match.params.id;
    axios.get(`/meal/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          meal:res.data.meal
        });
        console.log(this.state.meal);
      }
    });
  }

  render() {
    const {client_name,client_id,weight,height,body_fat_percentage,breakfast,mid_morning,lunch,evening,dinner} = this.state.meal;

    return (
      <div style = {{marginTop:'20px'}}>
        <h4>{client_name}</h4>
        <hr/>
        <dl className="row">
            <dt className="col-sm-3">Client ID</dt>
            <dd className="col-sm-9">{client_id}</dd>

            <dt className="col-sm-3">Weight</dt>
            <dd className="col-sm-9">{weight}</dd>

            <dt className="col-sm-3">Height</dt>
            <dd className="col-sm-9">{height}</dd>

            <dt className="col-sm-3">Body Fat Percentage</dt>
            <dd className="col-sm-9">{body_fat_percentage}</dd>

            <dt className="col-sm-3">Breakfast</dt>
            <dd className="col-sm-9">{breakfast}</dd>

            <dt className="col-sm-3">Mid Morning</dt>
            <dd className="col-sm-9">{mid_morning}</dd>

            <dt className="col-sm-3">Lunch</dt>
            <dd className="col-sm-9">{lunch}</dd>

            <dt className="col-sm-3">Evening</dt>
            <dd className="col-sm-9">{evening}</dd>

            <dt className="col-sm-3">Dinner</dt>
            <dd className="col-sm-9">{dinner}</dd>

        </dl>
      </div>
    )
  }
}
