import React, { Component } from 'react'
import axios from 'axios';

export default class CreateMeal extends Component {
    
  

  constructor(props) {
    super(props);
    this.state = {
      client_name: "",
      client_id: "",
      weight: "",
      height: "",
      body_fat_percentage: "",
      breakfast: "",
      mid_morning: "",
      lunch: "",
      evening:"",
      dinner: "",
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

    const { client_name,client_id,weight,height,body_fat_percentage,breakfast,mid_morning,lunch,evening,dinner } = this.state;

    const data = {
        client_name: client_name,
        client_id: client_id,
        weight: weight,
        height: height,
        body_fat_percentage: body_fat_percentage,
        breakfast: breakfast,
        mid_morning: mid_morning,
        lunch: lunch,
        evening: evening,
        dinner: dinner,
    };

    console.log(data)
    axios.post("/meal/save",data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            client_name: "",
            client_id: "",
            weight: "",
            height: "",
            body_fat_percentage: "",
            breakfast: "",
            mid_morning: "",
            lunch: "",
            evening:"",
            dinner: "",
          })
        }    
      })
    }
  render() {
    return (
      
        <div className='col-md-8 mt-4 mx-auto'>
            
          <h1 className='h3 mb-3 font-weight-normal'>Create Meal Plan</h1>
          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Client Name</label>
                <input
                    type='text'
                    className='form-control'
                    name='client_name'
                    placeholder='Enter Client Name'
                    value={this.state.client_name}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Client ID</label>
                <input
                    type='text'
                    className='form-control'
                    name='client_id'
                    placeholder='Enter Client ID'
                    value={this.state.client_id}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Weight</label>
                <input
                    type='text'
                    className='form-control'
                    name='weight'
                    placeholder='Enter Weight'
                    value={this.state.weight}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Height</label>
                <input
                    type='text'
                    className='form-control'
                    name='height'
                    placeholder='Enter Height'
                    value={this.state.height}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Body Fat Percentage</label>
                <input
                    type='text'
                    className='form-control'
                    name='body_fat_percentage'
                    placeholder='Enter Body Fat Percentage'
                    value={this.state.body_fat_percentage}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Breakfast</label>
                <input
                    type='text'
                    className='form-control'
                    name='breakfast'
                    placeholder='Enter Breakfast'
                    value={this.state.breakfast}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Mid Morning</label>
                <input
                    type='text'
                    className='form-control'
                    name='mid_morning'
                    placeholder='Enter Mid Morning'
                    value={this.state.mid_morning}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Lunch</label>
                <input
                    type='text'
                    className='form-control'
                    name='lunch'
                    placeholder='Enter Lunch'
                    value={this.state.lunch}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Evening</label>
                <input
                    type='text'
                    className='form-control'
                    name='evening'
                    placeholder='Enter Evening'
                    value={this.state.evening}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Dinner</label>
                <input
                    type='text'
                    className='form-control'
                    name='dinner'
                    placeholder='Enter Dinner'
                    value={this.state.dinner}
                    onChange={this.handleInputChange}
                />
            </div>
            <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                <i className='far fa-check-square'></i>
                &nbsp; Save
            </button>



                
        </form>
      </div>
    )
  }
}
