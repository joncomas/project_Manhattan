import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class UrlCamp extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	botonValidarFetch(e) {
		this.actioncontext.obtenerUrlCampanas(this.storecontext.inputsCamp);
		console.log("En algún momento, este botón va a validar información.");
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div>
							<button onClick={e => this.botonValidarFetch(e)} className="btn btn-primary">
								Ola k ase
							</button>
							<Link to="/campana">
								<button className="btn btn-primary">Volver</button>
							</Link>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
