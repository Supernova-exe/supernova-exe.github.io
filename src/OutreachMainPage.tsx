import React from "react";
import "./css/MenuPage.css";
import {Link} from "react-router-dom";


const OutreachMainPage : React.FC = () => {
    return (
        <div className= "menuPage outreachMainPage">
            <h1>Outreach</h1>

            <nav>
                <ul>
                    <li><Link to="/outreach/24-25OffSeason">2024-2025 Off Season</Link></li>
                    <li><Link to="/outreach/centerstage">Centerstage (2023-2024)</Link></li>
                    <li><Link to="/outreach/23-24OffSeason">2023-2024 Off Season</Link></li>
                    <li><Link to="/outreach/powerplay">Powerplay (2022-2023)</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default OutreachMainPage;