import * as React from 'react';

import { Spacer, Navigation, Icon } from 'mdl-react-ts';
// Router
import { Router, Link } from "react-router";

class NavIcon extends React.Component<{ name: string }, {}> {
    render() {
        return <Icon className="mdl-color-text--blue-grey-400" name={this.props.name} />
    }
}

export default React.createClass({
    render: function () {
        return (
            <Navigation className="demo-navigation mdl-color--blue-grey-800">
                <Link to="dashboard"><NavIcon name="home" />Dashboard</Link>
                <Link to="charts"><NavIcon name="insert_chart" />Charts</Link>
                <Link to="text"><NavIcon name="format_size" />Text</Link>
                <Link to="account"><NavIcon name="settings" />My Account</Link>
                <Spacer />
                <a>
                    <NavIcon name="help_outline" />
                    <span className="visuallyhidden">Help</span>
                </a>
            </Navigation>
        )
    }
})
