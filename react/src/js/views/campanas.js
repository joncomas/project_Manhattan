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
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div>
							<h1>
								Acá en teoría van las campañas, y cada una tendría un botón para liquidar la campaña
							</h1>
							<button className="btn btn-primary">Borrar campaña</button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
