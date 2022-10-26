import React, { Component } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import axios from 'axios';

export default class EditItems extends Component {

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
    const id = this.props.match.params.id;

    const { itemname,brand,qty,price } = this.state;

    const data = {
      itemname: itemname,
      brand: brand,
      qty: qty,
      price: price,
    };

    console.log(data)
    axios.put(`/Shop/update/${id}`,data).then((res) => {
      if (res.data.success) {
        alert("Items Updated Successfully")
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
  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/Shop/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                itemname:res.data.Shop.itemname,
                brand:res.data.Shop.brand,
                qty:res.data.Shop.qty,
                price:res.data.Shop.price,
            });
            console.log(this.state.shop)
        }
    });
  }

  render() {
    return (
      
        <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Edit Items</h1>
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
              &nbsp;Update
            </button>
        </form>
      </div>
    )
  }
}