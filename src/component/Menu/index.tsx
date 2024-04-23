import React from "react";
import { Link } from "react-router-dom";

export const Menu: React.FC = React.memo((): JSX.Element => {
    return (
        <div className="border border-3">
            <nav>
                <ul>
                    <li><Link to={'/'}>Home page</Link></li>
                    <li><Link to={'/addpost'}>Form</Link></li>
                </ul>
            </nav>
        </div>
    )
})