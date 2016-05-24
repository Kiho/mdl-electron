import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Router from "react-router";

import App from "./containers/app";
import DemoCharts from "./containers/charts";
import DemoText from "./containers/text";
import Account from "./containers/account-setup";

import Dashboard from "./containers/dashboard";
import NotFound from "./containers/not-found";

(function () {
    //var injectTapEventPlugin = require("react-tap-event-plugin");
    //injectTapEventPlugin();

    //require("babel-polyfill");

    // Set up Router object
    var Route = Route.Route;
    var DefaultRoute = Route.DefaultRoute;
    var NotFoundRoute = Route.NotFoundRoute;

    // Declare routes

    var routes = (
        <Route path="/" handler={App}>
            <Route name="dashboard" path="/dashboard" handler={Dashboard} />
            <Route name="charts" path="/charts" handler={DemoCharts} />
            <Route name="text" path="/text" handler={DemoText} />
            <Route name="account" path="/acount" handler={Account} />
            <DefaultRoute handler={Dashboard} />
            <NotFoundRoute handler={NotFound} />
        </Route>
    );

    Route.run(routes, function (Handler, state) {
        var params = state.params;
        ReactDOM.render(<Handler params={params} />, document.getElementById('app'));
    });
})();
