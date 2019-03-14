import React, { Component } from 'react';
import "./sidebar.css"

class SideBar extends Component {
	constructor() {
        super();
        this.state = {width: 50, expanded: false};
	}
	toggleNav = () => {
		if(this.state.width == 50) {
			this.setState({width: 300, expanded: true});
		}
		else {
			this.setState({width: 50, expanded: false});
		}
	}
	reroute = (newRoute) => {
		console.log(newRoute);
	}
	render() {
		var navStyle = {
			width: this.state.width
		}
		const items = [
			{
				icon: "https://cdn4.iconfinder.com/data/icons/follower/512/login-man-person-human-body-512.png",
				text: "Watch Together",
				newRoute: ""
			},
			{
				icon: "https://image.flaticon.com/icons/png/512/613/613307.png",
				text: "Currently Watching",
				newRoute: ""
			},
			{
				icon: "https://image.flaticon.com/icons/png/512/63/63355.png",
				text: "Recently Updated",
				newRoute: ""
			},
		];

		var display = [];
		for(var item of items) {
			if(this.state.expanded) {
				display.push(
					<a className="nav-item" onClick={() => this.reroute(item.newRoute)}>{item.text}</a>
				);
			}
			else {
				display.push(
					<a className="nav-item" onClick={() => this.reroute(item.newRoute)}><img src={item.icon} className="nav-icon invert" /></a>
				);
			}
			
			display.push(<hr />);
		}

		return (
			<div id="mySidenav" class="sidenav" style={navStyle}>
				<a className="nav-item closebtn" onClick={this.toggleNav}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png" className="nav-icon invert" /></a>
				<hr />
				{display}
			</div>
		);
	}
}

export default SideBar;
