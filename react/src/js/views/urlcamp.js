import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class UrlCamp extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableAuxiliar: ""
		};
	}
	otraForma = e => {
		for (let i = 0; i < this.storecontext.respCamp.length; i++) {
			let arregloaux = this.storecontext.respCamp[i];
			//console.log("Variable aux antes del if", arregloaux);
			//console.log("Variable aux .id y también la id de params", arregloaux.id);
			if (arregloaux.id == this.props.match.params.id) {
				this.setState({
					variableAuxiliar: arregloaux
				});
				//console.log("Variable this aux después del if", arregloaux);
				return;
			}
		}
	};
	componentDidMount() {
		//console.log("Algo", this.props);
		//this.actioncontext.obtenerCampanas(this.props.match.params.id);
		//console.log("Probando algo", this.props.match.params.id);
		this.actioncontext.obtenerUrlCampanas(this.props.match.params.id);
		//console.log("El arreglo", this.storecontext.respCamp);
		//console.log("Probando algo segundo", this.storecontext.respCamp[0].id);
		//console.log("Probando algo 3", this.storecontext.respCamp.length);
		this.otraForma();
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
							<li className="col-sm-6" key={index}>
								<p>{result.results}</p>
							</li>
						);
					});
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="col-md-6">
										<h6>Nombre campaña</h6>
										{this.state.variableAuxiliar.name_camp}
									</div>
									<div className="col-md-6">
										<h6>URL a buscar</h6>
										{this.state.variableAuxiliar.item_to_search}
									</div>
								</div>
								<div className="col-md-12">
									<div className="col-md-6">
										<h6>Detalles de la búsqueda</h6>
										{this.state.variableAuxiliar.details}
									</div>
									<div className="col-md-6">
										<h6>¿Es Zeus?</h6>
									</div>
								</div>
								<div className="col-md-12">
									<h4>Resultados</h4>
									<ol>{resultados}</ol>
								</div>
								<div className="col-md-12">
									<Link to="/campana">
										<button className="btn btn-primary">Volver</button>
									</Link>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
UrlCamp.propTypes = {
	history: PropTypes.any,
	match: PropTypes.any
};
