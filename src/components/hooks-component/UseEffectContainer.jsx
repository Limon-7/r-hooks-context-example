import React, { useState } from "react";
import { Route } from "react-router-dom";

import * as ROUTES from "../constant/routes";

import UseEffectCounter from "./UseEffectCounter";
import Sidebar from "../sidebar/Sidebar";
import UseEffectDependency from "./UseEffectDependency";
import UseEffectFetchData from "./UseEffectFetchData";

const useEffectHome = () => {
    const [display, setDisplay] = useState(false);
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => setDisplay(!display)}>
                {display ? "Hide" : "Show"}
            </button>
            {display && <UseEffectCounter />}
        </div>
    );
};
function UseEffectContainer() {
    return (
        <div>
            <Sidebar />
            <Route
                exact
                path={ROUTES.USE_EFFECT_HOME}
                component={useEffectHome}
            />

            <Route
                path={ROUTES.USE_EFFECT_BASIC}
                render={() => <UseEffectCounter />}
            />
            <Route
                path={ROUTES.USE_EFFECT_DEPENDENCY}
                component={UseEffectDependency}
            />
            <Route
                path={ROUTES.USE_EFFECT_FETCH_DATA}
                component={UseEffectFetchData}
            />
        </div>
    );
}

export default UseEffectContainer;
