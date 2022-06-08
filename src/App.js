import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Tab from "./Tab";
import Panel from "./Panel";
import Form from "./Form";
import Pinger from "./Pinger";

class App extends Component {
    render() {
        return (
            <Tab>
                <Panel title="Address utils">
                    <Form/>
                </Panel>
                <Panel title="Service Status">
                    <Pinger/>
                </Panel>
            </Tab>
        );
    }
}

export default App;
