import {Link} from "@reach/router";
import React from "react";
import style from './FooterMenu.module.scss';

const FooterMenu = () =>
    <div className={style.Menu}>
        <ul>
            <li><Link to="/credits">Resources</Link></li>
        </ul>
    </div>
;

export default FooterMenu;
