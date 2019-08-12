import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Campana extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	componentDidMount() {
		this.actioncontext.obtenerCampanas();
	}
	botonEliminarCampana(e, id) {
		this.actioncontext.eliminacionCamp(id, this.props.history);
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					const campanitas = store.respCamp.map((campanas, index) => {
						return (
							<div className="row" key={index}>
								<div className="col-sm-6">
									<h6>Nombre de la campaña</h6>
									<p>{campanas.name_camp}</p>
								</div>
								<div className="col-sm-6">
									<h6>Objeto a buscar</h6>
									<p>{campanas.item_to_search}</p>
								</div>
								<div className="col-sm-12">
									<h6>Detalles de la búsqueda</h6>
									<p>{campanas.details}</p>
								</div>
								<div className="col-sm-12">
									<Link to={"/campana/" + campanas.id}>
										<button className="btn btn-primary">Obtener resultados</button>
									</Link>
									<button
										onClick={e => this.botonEliminarCampana(e, campanas.id)}
										className="btn btn-dark offset-9">
										Borrar campaña
									</button>
								</div>
							</div>
						);
					});
					return (
						<div>
							<h1>Campañas activas</h1>
							{campanitas}
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Campana.propTypes = {
	history: PropTypes.any
};
