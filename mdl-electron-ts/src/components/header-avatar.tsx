import * as React from 'react';
import { Header, Spacer, Menu, MenuItem, IconButton, Align } from 'mdl-react-ts';

export default React.createClass({
    render: function () {
        return (
            <header className="demo-drawer-header">
                <img src="https://en.gravatar.com/userimage/99124354/49dde5d6cd47662d3108ab03f78ad239.jpeg" className="demo-avatar"/>
                <div className="demo-avatar-dropdown">
                    <span>andrew @odewahn.com</span>
                    <Spacer />
                    <IconButton name="arrow_drop_down" className="f14" id="accbtn" />
                    <Menu target="accbtn" align={Align.right}>
                        <MenuItem>hello @example.com</MenuItem>
                        <MenuItem>info @example.com</MenuItem>
                        <MenuItem><i className="material-icons">add</i>Add another account...</MenuItem>
                    </Menu>
                </div>
            </header>
        )
    }
})
