import React, { Component } from 'react'
import axios from 'axios';

export default class ItemDetails extends Component {
  constructor(props){
    super(props);

    this.state={
        shop:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/Shop/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                shop:res.data.Shop
            });
            console.log(this.state.shop)
        }
    });
  }
  
    render() {
      
      const {itemname,brand,qty,price} = this.state.shop;

      return(
        
      <div style={{marginTop:'20px'}}>
        <h3>{itemname}</h3>
        <hr/>


        <dl className="row">
          <dt className="col-sm-3">Brand</dt>
          <dd className="col-sm-9">{brand}</dd>

          <dt className="col-sm-3">Quantity</dt>
          <dd className="col-sm-9">{qty}</dd>

          <dt className="col-sm-3">Price</dt>
          <dd className="col-sm-9">{price}</dd>

        </dl>
      </div>
      )
  }
}
