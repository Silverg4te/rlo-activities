import React from 'react';
import {NavLink} from "react-router-dom";
import * as constant from '../constant';

function SideMenu() {
    return (
        <ul className="list-group">
            {
                constant.activities.map(({path, title}) => (
                    <li>
                        <NavLink className="nav-item nav-link" to={path}>{title}</NavLink>
                    </li>
                ))
            }
        </ul>
    );
}

export default SideMenu;
