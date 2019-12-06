import React, { Component } from 'react';
import style from './Navbar.module.scss';
import logoText from '../../../config/logo/logo-text.svg';
import logoIcon from '../../../config/logo/logo-icon.svg';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

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
		console.log('test');
	};

	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light">
				<div onClick={() => navigate('/')} className={`${style.LogoHolder} navbar-brand`}>
					<img alt="ncweb-logo" src={logoIcon} />
					<img alt="ncweb-logoText" src={logoText} />
				</div>
				<button className="navbar-toggler bg-light" type="button" onClick={this.navbarHandler}>
					<span className="navbar-toggler-icon" />
				</button>
			</nav>
		);
	}
}
