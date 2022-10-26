import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
constructor(props) {
    super(props);
    this.state = {  
      members:[]
    };
  }
componentDidMount(){
  this.retrieveMember();
}
  retrieveMember(){
    axios.get("/Member").then(res => {
      if(res.data.success){
        this.setState({   
          members:res.data.existingMember
      });
      console.log(this.state.members)
    }
  });
}

onDelete = (id) => {
  axios.delete(`/Member/delete/${id}`).then((res) => {
    alert("Member deleted successfully");
    this.retrieveMember();
    })
  }

filterData(posts,searchKey){
const result = posts.filter((post) =>
post.Name.toLowerCase().includes(searchKey)
)
this.setState({members:result})
}

handleSearchArea = (e) => {
const searchKey = e.currentTarget.value;
axios.get("/Member").then(res => {
  if(res.data.success){
    this.filterData(res.data.existingMember,searchKey)
}
});

}


  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 mt-2 mb-2'>
        <h4>All Members</h4>
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
            <th scope="col">Name</th>
            <th scope="col">Member_ID</th>
            <th scope="col">NIC</th>
            <th scope="col">Duration</th>
            <th scope="col">DOB</th>
            <th scope="col">Date of admission</th>
          </tr>
        </thead>
        <tbody>
          {this.state.members.map((members,index)=>(
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>
                <a href={`/Member/${members._id}`} style={{textDecoration:'none'}}> {members.Name}</a>
                
              </td>
              <td>{members.Member_ID}</td>
              <td>{members.NIC}</td>
              <td>{members.Duration}</td>
              <td>{members.DOB}</td>
              <td>{members.Date_of_admission}</td>
              <td>
                <a className="btn btn-warning" href={`/edit/${members._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={()=> this.onDelete(members._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>

            </tr>
          ))}
        </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create Member</a></button>
      </div>
    )
  }
}

