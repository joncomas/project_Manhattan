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
	componentDidMount() {
		this.actioncontext.obtenerUrlCampanas();
		//console.log("Este console verifica el didmount que el result se hizo bien", this.storecontext.respUrlCamp);
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					const resultados = store.respUrlCamp.map((result, index) => {
						return (
							<ol className="row" key={index}>
								<li className="col-sm-6">
									<p>{result.results}</p>
								</li>
							</ol>
						);
					});
					return (
						<div>
							<h1>Resultados</h1>
							{resultados}
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
