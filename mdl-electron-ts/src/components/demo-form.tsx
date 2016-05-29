import * as React from 'react';
import * as $ from 'jquery';
import { Button, Textfield } from 'mdl-react-ts';

export default React.createClass({
    getInitialState: function () {
        return {
            Username: "",
            Password: "",
            Email: "",
        }
    },
    submitRequest: function () {
        console.log("Here's the stuff you put in", this.state)
    },
    setField: function (e) {
        var s = this.state
        s[e.target.name] = e.target.value
        this.setState(s)
    },
    componentDidMount: function () {
        // This fetches some data using jquery and sets the default values in the component's local state
        // In theory, this should all be done with Flux/redux, but man, does this Javasctipt framework
        // clusterfuck *ever* end?  How do people stand it?
        let handle = this
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/odewahn/mdl-react-golang/master/backend/public/data.json",
            success: function (result) {
                var dat = JSON.parse(result)
                handle.setState(dat)
            },
            error: function (jqXHR, status, err) {
                console.log("It failed because of", status)
            }
        })
    },
    componentDidUpdate: function () {
        // This is required to make sure we can upgrade the components using react router
        // See the discussions at:
        //  https://github.com/google/material-design-lite/issues/871
        //  http://quaintous.com/2015/07/09/react-components-with-mdl/
        //
        // (window as any).componentHandler.upgradeDom();
    },
    render: function () {
        return (
            <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                <div className="credential-block">
                    <h3>Your Account Info</h3>
                    <Textfield
                        label="Username"
                        name="Username"
                        value={this.state.Username}
                        onChange={this.setField}
                        floatingLabel={true} />
                    <br/>
                    <Textfield
                        label="Password"
                        name="Password"
                        value={this.state.Password}
                        onChange={this.setField}
                        floatingLabel={true} />
                    <br/>
                    <Textfield
                        label="Email"
                        name="Email"
                        value={this.state.Email}
                        readOnly={true}
                        floatingLabel={true} />
                    <br/>
                    <Button raised={true} colored={true} onClick={this.submitRequest}>Submit</Button>
                </div>
            </div>
        )
    }
})
