import React from "react";
import "./MenuPage.css";
import {Link} from "react-router-dom";

const AchievementsMainPage : React.FC = () => {
    return (
        <div className= "menuPage robotMainPage">
            <h1>Robots</h1>
            <nav>
                <ul>
                    <li><Link to = "../centerstage">Centerstage (2023-2024)</Link></li>
                    <li><Link to = "../powerplay">Powerplay (2022-2023)</Link></li>
                </ul>
            </nav>
        </div>
    );
}
export default AchievementsMainPage;