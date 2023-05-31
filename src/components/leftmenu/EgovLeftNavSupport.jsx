import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavSupport() {
    return (
        <div className="nav">
            <div className="inner">
                <h2>마켓</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.SUPPORT_DOWNLOAD} className={({ isActive }) => (isActive ? "cur" : "")}>무료나눔</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_QNA} className={({ isActive }) => (isActive ? "cur" : "")}>중고 마켓</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_APPLY} className={({ isActive }) => (isActive ? "cur" : "")}>*용품 주의</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavSupport;