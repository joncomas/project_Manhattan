import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
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
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					const ultimoDigito = store.respCamp.length - 1;
					const campanitasres = store.respCamp.map((campanas, index) => {
						if (index === ultimoDigito) {
							return (
								<div className="col-md-12" key={index}>
									<div className="card text-center">
										<div className="card-header">Campaña</div>
										<div className="card-body">
											<h5 className="card-title">{campanas.name_camp}</h5>
											<p className="card-text">{campanas.details}</p>
											<div className="row">
												<div className="col-md-12">
													<Link to={"/campana/" + campanas.id}>
														<button className="btn btn-primary">
															Ir a resultados campaña
														</button>
													</Link>
													<Link to={"/editarcampana/" + campanas.id}>
														<button className="btn btn-info">Editar campaña</button>
													</Link>
												</div>
											</div>
										</div>
										<div className="card-footer text-muted">Gracias por preferirnos</div>
									</div>
								</div>
							);
						}
					});
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<h1>Última campaña creada</h1>
								</div>

								<div className="col-md-12">{campanitasres}</div>
								<div className="col-md-4 offset-5">
									<Link to="/crearcampaña">
										<button className="btn btn-success">Crear campaña</button>
									</Link>
								</div>
								<div>
									<p>
										LEMR consiste en crear campañas para obtener resultados. Siga las siguientes
										instrucciones si tiene dudas.
									</p>
									<h6>Instrucciones</h6>
									<p>Acá irán las instrucciones cuando sepa bien qué debo escribir</p>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
