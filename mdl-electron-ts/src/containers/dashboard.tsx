import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DemoCharts from '../components/demo-charts';
import DemoText from '../components/demo-text';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello from Electron!!!</h1>
                <DemoCharts />
                <DemoText />
            </div>
        )
    }
})
