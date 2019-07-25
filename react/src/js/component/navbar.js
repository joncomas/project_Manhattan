import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	limpiarinfo() {
		localStorage.clear();
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">LEMR o k ase</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button onClick={this.limpiarinfo} className="btn btn-primary">
							Logout o k ase
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
