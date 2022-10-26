import React, { Component } from 'react'
import axios from 'axios';

export default class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemname: "",
      brand: "",
      qty: "",
      price: "",
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

    const { itemname,brand,qty,price } = this.state;

    const data = {
      itemname: itemname,
      brand: brand,
      qty: qty,
      price: price,
    };

    console.log(data)
    axios.post("/Shop/save",data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
          itemname: "",
          brand: "",
          qty: "",
          price: "",
          });
          window.location.href = '/';
        }    
      })
    }
  render() {
    return (
      
        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Add New Items</h1>
          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Item Name</label>
              <input
                type='text'
                className='form-control'
                name='itemname'
                placeholder='Enter Item Name'
                value={this.state.itemname}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Brand</label>
              <input
                type='text'
                className='form-control'
                name='brand'
                placeholder='Enter Brand Name'
                value={this.state.brand}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Quantity</label>
              <input
                type='text'
                className='form-control'
                name='qty'
                placeholder='Enter Quantity'
                value={this.state.qty}
                onChange={this.handleInputChange}/>
            </div>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Price per Unit</label>
              <input
                type='text'
                className='form-control'
                name='price'
                placeholder='Enter the Price'
                value={this.state.price}
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
