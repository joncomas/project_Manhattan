import React from "react";
import { Context } from "../store/appContext";

export class Campana extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
		this.botonValidarInfo = this.botonValidarInfo.bind(this);
	}
	botonValidarInfo(e) {
		this.actioncontext.eliminacionCamp("10");
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
							<h1>Acá en teoría, pondrás un URL y se buscará dentro de ese URL</h1>
							<button onClick={e => this.botonValidarInfo(e)} className="btn btn-primary">
								Borrar campaña
							</button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
