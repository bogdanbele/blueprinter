import React, { Component } from 'react';
import style from './Navbar.module.scss';
import LogoText  from '../../../config/logo/logo-text.svg';
import LogoIcon from '../../../config/logo/logo-icon.svg';
import { Link } from 'gatsby';
import ThemeCheckbox from '../../base-components/ThemeCheckbox/';
import {navigate} from "@reach/router";

export default class Navbar extends Component {
	state = {
		isNavbarOpen: false,
		css: 'collapse navbar-collapse',
		links: [
			{
				id: 1,
				path: '/',
				linkName: 'Home',
			},
			{
				id: 2,
				path: '/about',
				linkName: 'About',
			},
			{
				id: 3,
				path: '/get-started',
				linkName: 'Get Started',
			},
			{
				id: 4,
				path: '/meet-the-team',
				linkName: 'Team',
			},
			{
				id: 5,
				path: '/plans',
				linkName: 'Plans',
			},
			{
				id: 6,
				path: '/contact',
				linkName: 'Contact',
			},
		],
	};
	navbarHandler = () => {
		this.state.isNavbarOpen
			? this.setState({ isNavbarOpen: false, css: 'collapse navbar-collapse' })
			: this.setState({ isNavbarOpen: true, css: 'collapse navbar-collapse show' });
	};

	render() {
		return (
			<nav className="navbar px-0 px-md-3 my-2 navbar-expand-md navbar-light">
				<ThemeCheckbox className={style.ThemeCheck} />
				<div onClick={() => navigate('/')} className={`${style.LogoHolder} navbar-brand`}>
					<LogoIcon className={style.SvgIconLogo}/>
					<LogoText  className={style.SvgIconLogo}/>
				</div>
				<button className="navbar-toggler bg-light mr-md-0 mr-2" type="button" onClick={this.navbarHandler}>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={this.state.css}>
					<ul className="navbar-nav w-auto mx-auto ml-4 alternating-row-odd-md">
						{this.state.links.map(link => {
							return (
								<li key={link.id} className="nav-item mb-0 py-2">
									<Link to={link.path} activeClassName={'active-class'} className={`${style.NavLink} mx-md-3 mx-4 mx-xl-4 primary av-link text-capitalize`}>
										{link.linkName}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		);
	}
}
