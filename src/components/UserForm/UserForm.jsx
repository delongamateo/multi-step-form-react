import { Component} from "react"
import FormUserDetails from "../FormUserDetails/FormUserDetails"
import FormPersonalDetails from "../FormPersonalDetails/FormPersonalDetails"
import Confirm from "../Confirm/Confirm"
import Success from "../Success/Success"

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    //Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Proceed to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        value={values}
                        prevStep={this.prevStep}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Success/>   
                )
        }
    }
}

export default UserForm