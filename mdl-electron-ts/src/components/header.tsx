import * as React from 'react';
import { Header, Textfield, Menu, MenuItem, IconButton,Align } from 'mdl-react-ts';

export default React.createClass({
    render: function () {
        return (
            <Header title="Home" className="demo-header mdl-color--grey-100 mdl-color-text--grey-600">
                <Textfield
                    label="Search"
                    expandable={true}
                    expandableIcon="search" />
                <IconButton name="more_vert" id="nav-menu-top-right" />
                <Menu target="nav-menu-top-right" align={Align.right}>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Legal information</MenuItem>
                </Menu>
            </Header>
        )
    }
})
