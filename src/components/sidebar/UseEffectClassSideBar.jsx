import React from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../constant/routes";
import "./Sidebar.css";

function UseEffectClassSideBar() {
    return (
        <div className="sidebar">
            <NavLink
                exact
                to={ROUTES.USE_EFFECT_CLASS_HOME}
                activeClassName="nav-active"
            >
                Home
            </NavLink>

            <NavLink
                to={ROUTES.USE_EFFECT_CLASS_BASIC}
                activeClassName="nav-active"
            >
                Basic
            </NavLink>
            <NavLink
                to={ROUTES.USE_EFFECT_CLASS_DEPENDENCY}
                activeClassName="nav-active"
            >
                dependency
            </NavLink>
        </div>
    );
}

export default UseEffectClassSideBar;
