import React from "react";

import { NavLink } from "react-router-dom";
import * as ROUTES from "../constant/routes";

import "./Navigation.css";
function Navigation() {
    return (
        <div className="nav">
            <NavLink exact to={ROUTES.HOME} activeClassName="nav-active">
                Home
            </NavLink>

            <NavLink exact to={ROUTES.USE_STATE} activeClassName="nav-active">
                use-state
            </NavLink>

            <NavLink
                exact
                to={ROUTES.USE_STATE_CLASS}
                activeClassName="nav-active"
            >
                use-state-class
            </NavLink>

            <NavLink to={ROUTES.USE_EFFECT_HOME} activeClassName="nav-active">
                effect
            </NavLink>

            <NavLink
                to={ROUTES.USE_EFFECT_CLASS_HOME}
                activeClassName="nav-active"
            >
                effect-class
            </NavLink>
        </div>
    );
}

export default Navigation;
