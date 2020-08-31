import React from "react";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../constant/routes";
import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <NavLink
                exact
                to={ROUTES.USE_EFFECT_HOME}
                activeClassName="nav-active"
            >
                Home
            </NavLink>
            <NavLink to={ROUTES.USE_EFFECT_BASIC} activeClassName="nav-active">
                Basic
            </NavLink>
            <NavLink
                to={ROUTES.USE_EFFECT_DEPENDENCY}
                activeClassName="nav-active"
            >
                Dependency
            </NavLink>
            <NavLink
                to={ROUTES.USE_EFFECT_FETCH_DATA}
                activeClassName="nav-active"
            >
                Fetch Data
            </NavLink>
        </div>
    );
}

export default Sidebar;
