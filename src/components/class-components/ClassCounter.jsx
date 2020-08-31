import React, { Component } from "react";

export class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    handleIncrement = () => {
        this.setState((preState) => {
            return {
                count: preState.count + 1,
            };
        });
    };

    componentDidMount() {
        document.title = `you clicked ${this.state.count} times`;
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Document title updated");
            document.title = `you clicked ${this.state.count} times`;
        }
    }
    render() {
        return (
            <div className="container class-component">
                <h1>Class Component</h1>
                <h2>Count:{this.state.count}</h2>
                <button onClick={() => this.setState({ count: 0 })}>
                    Reset
                </button>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default ClassCounter;
