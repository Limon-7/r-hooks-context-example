import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as ROUTES from "../constant/routes";
import UseEffectClassSideBar from "../sidebar/UseEffectClassSideBar";
import UseEffectClassCounter from "./UseEffectClassCountr";
import UseEffectClassDependency from "./UseEffectClassDependency";

export class useEffectClassHome extends Component {
    state = {
        display: false,
    };
    render() {
        return (
            <div>
                <h1>Home</h1>
                <button
                    onClick={() =>
                        this.setState({ display: !this.state.display })
                    }
                >
                    {this.state.display ? "Hide" : "Show"}
                </button>
                {this.state.display && <UseEffectClassCounter />}
            </div>
        );
    }
}
function UseEffectClassContainer() {
    return (
        <div>
            <UseEffectClassSideBar />
            <Route
                exact
                path={ROUTES.USE_EFFECT_CLASS_HOME}
                component={useEffectClassHome}
            />

            <Route
                path={ROUTES.USE_EFFECT_CLASS_BASIC}
                render={() => <UseEffectClassCounter />}
            />
            <Route
                path={ROUTES.USE_EFFECT_CLASS_DEPENDENCY}
                component={UseEffectClassDependency}
            />
        </div>
    );
}

export default UseEffectClassContainer;
