import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

function OverviewNavbar(props) {
    const { label, links } = props;

    return (
        <nav className="overview__admin-nav">
            {label && 
                <div className="overview__admin-label">
                    <span className="overview__admin-icon">
                        <i className="fa fa-tasks"></i>
                    </span>
                    {label}
                </div>
            }
            {links && links.map((link, index) => (
                <Link className="overview__admin-link" to={link.url} key={index}>
                    <i className={`fa ${link.classIcon}`}></i>
                    {link.label}
                </Link>
            ))}
            {/* <Link className="overview__admin-link" to="/overview?perfil"><i className="fa fa-id-card"></i>Perfil</Link>
            <Link className="overview__admin-link" to="/overview?eventos"><i className="fa fa-calendar"></i>Eventos</Link>
            <Link className="overview__admin-link" to="/overview?participantes"><i className="fa fa-users"></i>Participantes</Link> */}
        </nav>

    );
}

export default OverviewNavbar;
