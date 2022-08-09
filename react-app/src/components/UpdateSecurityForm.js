import React,{Component} from 'react';
import { useLocation } from 'react-router-dom'

export default class UpdateSecurityForm extends Component {
//    const location = useLocation();
//    const data = location.state;
//    console.log(data);
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {

        }

    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

        render() {
            const { router, params, location, routes } = this.props;
            console.log(params);
        return (
            <div>
                <form >
                        <label> Id:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> ISIN:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> CUSIP:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> ISSUER:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> COUPON:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> TYPE:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> FACEVALUE:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> STATUS:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label> MATURITY DATE:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>


                        <input type="submit" value="Submit" />
                </form>


            </div>
        )
        }
}