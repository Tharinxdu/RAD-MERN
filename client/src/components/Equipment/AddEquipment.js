import React, {Component} from 'react';
import axios from 'axios';

export default class AddEquipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eName: "",
            ePrice: "",
            nextServiceDate: "",
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

        const { eName, ePrice, nextServiceDate } = this.state;

        const data = {
            eName: eName,
            ePrice: ePrice,
            nextServiceDate: nextServiceDate,
        };

        console.log(data)
        axios.post("/equipment/save",data).then((res) => {
            if (res.data.success) {
                this.setState(
                    {
                        eName: "",
                        ePrice: "",
                        nextServiceDate: "",
                    })
            }
        })
    }

    render() {
        return (

            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Add New Equipment</h1>
                <form className='needs-validation' noValidate>
                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            name='eName'
                            placeholder='Enter equipment name'
                            value={this.state.eName}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Equipment Price</label>
                        <input
                            type='text'
                            className='form-control'
                            name='ePrice'
                            placeholder='Enter price'
                            value={this.state.ePrice}
                            onChange={this.handleInputChange}/>
                    </div>
                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Next Service Date</label>
                        <input
                            type='text'
                            className='form-control'
                            name='nextServiceDate'
                            placeholder='Enter next service date'
                            value={this.state.nextServiceDate}
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
