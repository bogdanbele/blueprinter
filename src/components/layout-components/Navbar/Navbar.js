import React, { Component } from 'react';
import style from './Navbar.module.scss';
import logoText from '../../../config/logo/logo-text.svg';
import logoIcon from '../../../config/logo/logo-icon.svg';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Checkbox from '@material-ui/core';
import Flex from '../../base-components/Flex';
import ThemeCheckbox from '../../base-components/ThemeCheckbox/Checkbox';

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
					<img alt="ncweb-logo" src={logoIcon} />
					<img alt="ncweb-logoText" src={logoText} />
				</div>
				<button className="navbar-toggler bg-light" type="button" onClick={this.navbarHandler}>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={this.state.css}>
					<ul className="navbar-nav w-auto mx-auto ml-4 alternating-row-odd-md">
						{this.state.links.map(link => {
							return (
								<li key={link.id} className="nav-item mb-0 py-2">
									<Link to={link.path} className="mx-4 primary av-link text-capitalize">
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
