import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import loginImg from "../../img/lemur-logo.jpg";
import "../../styles/navbar.scss";

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
						<nav className="navbar navbar-dark bg-dark mb-3">
							<Link to="/">
								<span className="navbar-brand mb-0 h1">{<img src={loginImg} />}</span>
							</Link>
							<div className="ml-auto">
								<button onClick={this.limpiarinfo} className="btn btn-primary">
									Desconectarse
								</button>
							</div>
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
