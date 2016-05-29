import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from "react-router";

import { Layout, Drawer, Content, Textfield, Menu, MenuItem, IconButton, Align } from 'mdl-react-ts';
import Header from '../components/header';
import HeaderAvatar from '../components/header-avatar';
import Nav from '../components/nav';

import DemoCharts from "./charts";

const RouteHandler = Router.RouteHandler;

// Component
export default React.createClass({
    render: function () {
        return (
            <div>
                <Layout className="demo-layout" fixedHeader={true} fixedDrawer={true}>
                    <Header />
                    <Drawer className="demo-drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
                        <HeaderAvatar />
                        <Nav />
                    </Drawer>
                    <Content className="mdl-color--grey-100">
                        <div className="mdl-grid demo-content">
                            <RouteHandler {...this.props} />
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
});

