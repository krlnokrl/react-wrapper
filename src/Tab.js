import logo from './logo.svg';
import './App.css';
import {Component} from "react";


class Tab extends Component {
    state={selected: this.props.selected || 0};

    handleChange(index){
        this.setState({selected: index});
    }
    render() {
        return (

            <div className="card-header" >
            <ul className="nav nav-tabs">
                {this.props.children.map((elem, index) => {
                        let style = index === this.state.selected ? " active" : ""
                        return (
                            <li key={index} className="nav-item" onClick={() => this.handleChange(index)}>
                                <a className={"nav-link" + style} href="#">
                                {elem.props.title}</a>
                            </li>
                        )
                    })}
            </ul>
        <div className="card-body">{this.props.children[this.state.selected]}</div>
        </div>


    );
    }
}

export default Tab;
