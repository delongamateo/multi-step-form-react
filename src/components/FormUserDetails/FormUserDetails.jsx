import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="React" />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
