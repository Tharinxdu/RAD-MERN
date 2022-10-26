import React, {Component} from 'react';
import axios from 'axios';


export default class EquipmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: {}
        };
    }

    componentDidMount() {
        const id =  this.props.match.params.id;
        axios.get(`/equipment/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    equipment:res.data.equipment
                });
                console.log(this.state.equipment);
            }
        });
    }

    render() {
        const { eName, ePrice, nextServiceDate} = this.state.equipment;

        return (
            <div style = {{marginTop:'20px'}}>
                <h4>{eName}</h4>
                <hr />
                <dl className="row">

                    <dt className="col-sm-3">Equipment Price</dt>
                    <dd className="col-sm-9">{ePrice}</dd>

                    <dt className="col-sm-3">Next Service Date</dt>
                    <dd className="col-sm-9">{nextServiceDate}</dd>

                </dl>
            </div>
        )
    }
}
