import React, { Component } from "react";

export class UseEffectClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            count: 0,
            x: 0,
            y: 0,
        };
        this.handleMousePosition = this.handleMousePosition.bind(this);
    }
    handleIncrement = () => {
        this.setState((preState) => {
            return {
                count: preState.count + 1,
            };
        });
    };
    handleMousePosition(e) {
        this.setState({ x: e.clientX, y: e.clientY });
    }
    componentDidMount() {
        console.log("ComponentDid lifecycle method invoked");
        document.title = `you clicked ${this.state.count} times`;
        window.addEventListener("mousemove", this.handleMousePosition);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(
                "componentDidUpdate life-cycle invoked:Document title updated"
            );
            document.title = `you clicked ${this.state.count} times`;
        }
    }
    componentWillUnmount() {
        console.log("remove component from dom tree");
        window.removeEventListener("mousemove", this.handleMousePosition);
    }
    render() {
        return (
            <div className="container">
                <h3>Class Component Example alternative for useEffect</h3>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Click {this.state.count} times
                </button>
                <div>
                    X: {this.state.x} and Y: {this.state.y}
                </div>
            </div>
        );
    }
}

export default UseEffectClassCounter;
