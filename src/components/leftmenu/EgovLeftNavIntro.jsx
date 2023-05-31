import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavIntro() {
    
    return (
        <div className="nav">
            <div className="inner">
                <h2>분양</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.INTRO_WORKS} className={({ isActive }) => (isActive ? "cur" : "")}>유기동물 분양</NavLink></li>
                    <li><NavLink to={URL.INTRO_SERVICE} className={({ isActive }) => (isActive ? "cur" : "")}>가정 분양</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavIntro;