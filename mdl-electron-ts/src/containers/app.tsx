import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from "react-router";

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
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <Header />
          <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
            <HeaderAvatar />
            <Nav />
          </div>
          <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-grid demo-content">
              <RouteHandler {...this.props} />
            </div>
          </main>
        </div>
      </div>
    );
  }
});

