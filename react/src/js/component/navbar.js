import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
		this.limpiarinfo = this.limpiarinfo.bind(this);
	}
	limpiarinfo() {
		localStorage.clear();
		this.actioncontext.clean();
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
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
				}}
			</Context.Consumer>
		);
	}
}
