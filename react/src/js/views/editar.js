import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Editar extends React.Component {
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
							<Link to="/campana/">
								<button className="btn btn-info">Volver</button>
							</Link>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
