import React, { Component } from 'react'
import axios from 'axios';

export default class EditMembers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Member_ID: "",
      NIC: "",
      Duration: "",
      DOB: "",
      Date_of_admission: "",
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
    const id =  this.props.match.params.id;
    const { Name, Member_ID, NIC, Duration, DOB,Date_of_admission } = this.state;

    const data = {
      Name: Name,
      Member_ID: Member_ID,
      NIC: NIC,
      Duration: Duration,
      DOB: DOB,
      Date_of_admission: Date_of_admission,
    };

    console.log(data)
    axios.put(`/Member/update/${id}`,data).then((res) => {
      if (res.data.success) {
        alert('Member Updated Successfully');
        this.setState(
          {
          Name: "",
          Member_ID: "",
          NIC: "",
          Duration: "",
          DOB: "",
          Date_of_admission: "",
          })
        }    
      })
    }

  componentDidMount() {
    const id =  this.props.match.params.id;
    axios.get(`/Member/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          Name:res.data.Member.Name,
          Member_ID:res.data.Member.Member_ID,
          NIC:res.data.Member.NIC,
          Duration:res.data.Member.Duration,
          DOB:res.data.Member.DOB,
          Date_of_admission:res.data.Member.Date_of_admission
        });
        console.log(this.state.members);
      }
    });
  }

  render() {
    return (
      
        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Update Member</h1>
          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Name</label>
              <input
                type='text'
                className='form-control'
                name='Name'
                placeholder='Enter Name'
                value={this.state.Name}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Member ID</label>
              <input
                type='text'
                className='form-control'
                name='Member_ID'
                placeholder='Enter Member_ID'
                value={this.state.Member_ID}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>NIC</label>
              <input
                type='text'
                className='form-control'
                name='NIC'
                placeholder='Enter NIC'
                value={this.state.NIC}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Duration</label>
              <input
                type='text'
                className='form-control'
                name='Duration'
                placeholder='Enter Duration'
                value={this.state.Duration}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>DOB</label>
              <input
                type='text'
                className='form-control'
                name='DOB'
                placeholder='Enter DOB'
                value={this.state.DOB}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Date of admission</label>
              <input
                type='text'
                className='form-control'
                name='Date_of_admission'
                placeholder='Enter Date of admission'
                value={this.state.Date_of_admission}
                onChange={this.handleInputChange}/>
            </div>
            <button
              className='btn btn-success'
              type='submit'
              style={{ marginTop: '15px' }}
              onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp;Update
            </button>
        </form>
      </div>
    )
  }
}
