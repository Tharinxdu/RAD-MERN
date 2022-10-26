import React, { Component } from 'react'
import axios from 'axios';

export default class MemberDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: {}
    };
  }

  componentDidMount() {
    const id =  this.props.match.params.id;
    axios.get(`/Member/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          members:res.data.Member
        });
        console.log(this.state.members);
      }
    });
  }

  render() {
    const { Name,Member_ID, NIC, Duration, DOB, Date_of_admission } = this.state.members;

    return (
      <div style = {{marginTop:'20px'}}>
        <h4>{Name}</h4>
        <hr />
        <dl className="row">
          <dt className="col-sm-3">Member_ID</dt>
          <dd className="col-sm-9">{Member_ID}</dd>

          <dt className="col-sm-3">NIC</dt>
          <dd className="col-sm-9">{NIC}</dd>

          <dt className="col-sm-3">Duration</dt>
          <dd className="col-sm-9">{Duration}</dd>

          <dt className="col-sm-3">DOB</dt>
          <dd className="col-sm-9">{DOB}</dd>

          <dt className="col-sm-3">Date_of_admission</dt>
          <dd className="col-sm-9">{Date_of_admission}</dd>
        </dl>
      </div>
    )
  }
}
