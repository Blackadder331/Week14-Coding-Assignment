import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.action(this.props.name);
    }

    render() {
        return (
            <button
                className="btn btn-sm btn-warning"
                onClick={this.handleClick}>
                {this.props.name} {this.props.count}
            </button>
        );
    }
}