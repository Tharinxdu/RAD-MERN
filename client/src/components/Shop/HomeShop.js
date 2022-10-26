import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
constructor(props) {
    super(props);
    this.state = {  
      shops:[]
    };
  }
  
  componentDidMount(){
    if(!localStorage.getItem("username")){
      window.location.href = "/";
    this.retrieveShop();
 }
}
 retrieveShop(){
   axios.get("/Shop").then(res => {
     if(res.data.success){
       this.setState({   
         shops:res.data.existingShop
     });
   }
 });
 }



 logout = () => {


      localStorage.clear();
      window.location.reload(false);


}

onDelete = (id) =>{
  axios.delete(`/Shop/delete/${id}`).then(res => {
    alert("Item deleted successfully");
      this.retrieveShop();
  })
}

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.itemname.toLowerCase().includes(searchKey)
  )
  this.setState({shops:result})
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;
  axios.get("/Shop").then(res => {
    if(res.data.success){
      this.filterData(res.data.existingShop,searchKey)
  }
});

}

render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
            <h4>Suppliment Shop</h4>
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
            <th scope="col">ItemName</th>
            <th scope="col">Brand</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price per Unit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.shops.map((shops,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/Shop/${shops._id}`} style={{textDecoration:'none'}}> {shops.itemname}</a>
                
              </td>
              <td>{shops.brand}</td>
              <td>{shops.qty}</td>
              <td>{shops.price}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${shops._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(shops._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>

            </tr>
          ))}
        </tbody>
        </table>

       
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Add new Item</a></button>
        <br/><br/>
        <button onClick={this.logout} className="btn btn-success"><a href="/" style={{textDecoration:'none', color:'white'}}>Logout</a></button>
      </div>
    )
  }
}


