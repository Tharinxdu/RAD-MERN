  import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
constructor(props) {
    super(props);
    this.state = {  
      meal:[]
    };
  }
componentDidMount(){
   this.retrieveMeal();
}

retrieveMeal(){
  axios.get("/meal").then(res => {
    if(res.data.success){
      this.setState({   
        meal:res.data.existingMeal
    });
  }
});
}

onDelete = (id) => {
    axios.delete(`/meal/delete/${id}`).then((res) => {
      alert("Meal plan deleted successfully");
      this.retrieveMeal();
      })
    }

filterData(posts,searchKey){
  const result = posts.filter((post) =>
  post.client_name.toLowerCase().includes(searchKey)
  )
  this.setState({meal:result})
}

handleSearchArea = (e) => {
  const searchKey = e.currentTarget.value;
  axios.get("/meal").then(res => {
    if(res.data.success){
      this.filterData(res.data.existingMeal,searchKey)
  }
});

}
  render() {
    return (
      
      <div className="container">
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
            <h4>All Meal Plans</h4>
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
            <th scope="col">client_name</th>
            <th scope="col">client_id</th>
            <th scope="col">weight</th>
            <th scope="col">height</th>
            <th scope="col">body_fat_percentage</th>
            <th scope="col">breakfast</th>
            <th scope="col">mid_morning</th>
            <th scope="col">lunch</th>
            <th scope="col">evening</th>
            <th scope="col">dinner</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.meal.map((meal,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/meal/${meal._id}`} style={{textDecoration:'none'}}> {meal.client_name}</a>
                
              </td>
                <td>{meal.client_id}</td>
                <td>{meal.weight}</td>
                <td>{meal.height}</td>
                <td>{meal.body_fat_percentage}</td>
                <td>{meal.breakfast}</td>
                <td>{meal.mid_morning}</td>
                <td>{meal.lunch}</td>
                <td>{meal.evening}</td>
                <td>{meal.dinner}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${meal._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(meal._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>

            </tr>
          ))}
        </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create Meal Plan</a></button>
      </div>
    )
  }
}