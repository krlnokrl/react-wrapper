import {Component} from "react";
import Web3 from 'web3'

class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            matic_address: '',
            data: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({matic_address: event.target.value});
    }

    handleSubmit(event) {
        this.handleRequestApi();
        event.preventDefault();
    }

    addressData(){
        if(this.state.data === '')
            return(<></>);
        return(
        <div className="card bg-secondary mt-4">
            {this.state.data.map((key, element) => {
                return( <div className="card-body"> {key.name} : {key.value} </div>)})
            }
        </div>
        );
    };

    isValidMatic(){
        return Web3.utils.isAddress(this.state.matic_address)
    };

    handleRequestApi(){
        this.setState(this.state['data'] = [{name:'depositAddress', value :"Bkce456.."},
                        {name:'balance', value:0.01}]);
    }

    render(){
        return(
        <form className="form-floating " onSubmit={this.handleSubmit}>
            <input type="text" className={this.isValidMatic()===true?"form-control bg-dark text-light is-valid":"form-control bg-dark text-light is-invalid"} id="bkc_address" placeholder="0x8AeF..."
                   value={this.state.matic_address} onChange={this.handleChange}/>
            <label htmlFor="bkc_address">Address Matic</label>
                <button className="btn btn-primary btn-lg w-100">Submit</button>
            {this.addressData()}
        </form>
    );
    }
}
export default Form;