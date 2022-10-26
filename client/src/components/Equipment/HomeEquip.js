import React, {Component} from 'react';
import axios from "axios";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            equipment: []
        };
    }

    componentDidMount() {
        this.retrieveEquipments();
    }

    retrieveEquipments() {
        axios.get("/equipment").then(res => {
            if (res.data.success) {
                this.setState({
                    equipment: res.data.existingEquipment
                });

                console.log(this.state.equipment)
            }
        })
    }

    onDelete = (id) => {
        axios.delete(`/equipment/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrieveEquipments();
        })
    }


    filterData(equipment, searchKey) {
        const result = equipment.filter((equipment) =>
            equipment.itemname.toLowerCase().includes(searchKey)
        )
        this.setState({equipment: result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;
        axios.get("/equipment").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingEquipment, searchKey)
            }
        });
    }


        render()
        {
            return (
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-9 mt-2 mb-2'>
                            <h4>All Equipments</h4>
                        </div>
                        <div className='col-lg-3 mt-2 mb-2'>
                            <input
                                className='form-control'
                                type='search'
                                placeholder='Search'
                                name='SearchQuery'
                                onChange={this.handleSearchArea}>
                            </input>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Equipment Name</th>
                            <th scope="col">Equipment Price</th>
                            <th scope="col">Next Service Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.equipment.map((equipment, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <a href={`/equipment/${equipment._id}`} style={{textDecoration: 'none'}}>
                                        {equipment.eName}
                                    </a>
                                </td>
                                <td>{equipment.ePrice}</td>
                                <td>{equipment.nextServiceDate}</td>
                                <td>
                                    <a className="btn btn-warning" href={`/edit/${equipment._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(equipment._id)}>
                                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button className="btn btn-success"><a href="/add" style={{textDecoration: 'none', color: 'white'}}>Add
                        Equipment</a></button>

                </div>
            );
        }
}

