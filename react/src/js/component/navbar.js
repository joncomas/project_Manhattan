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
		//console.log("Este console va antes que -se borren- las weas", this.storecontext.InputsToken);
		//console.log("Antes que se borre", localStorage);
		this.actioncontext.clean();
		//console.log("Despues que se borra", localStorage);
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
								<span className="navbar-brand mb-0 h1">LEMR</span>
							</Link>
							<div className="ml-auto">
								<button onClick={this.limpiarinfo} className="btn btn-primary">
									Logout o k ase
								</button>
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
