import React from 'react';
import Link from 'gatsby-link';
import style from './Menu.module.scss';

const Menu = () => 
	<div className={style.Menu}>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/get-started">Get Started</Link>
			</li>
			<li>
				<Link to="/meet-the-team">Team</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
		</ul>
	</div>
;

export default Menu;

