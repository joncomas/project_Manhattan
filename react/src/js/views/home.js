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
					const campanitasres = store.respCamp.map((campanas, index) => {
						return (
							<div className="col-md-12" key={index}>
								<div className="card text-center">
									<div className="card-header">Campaña</div>
									<div className="card-body">
										<h5 className="card-title">{campanas.name_camp}</h5>
										<p className="card-text">{campanas.details}</p>
										<Link to="/campana">
											<button className="btn btn-primary">Ir a campañas</button>
										</Link>
									</div>
									<div className="card-footer text-muted">Gracias por preferirnos</div>
								</div>
							</div>
						);
					});
					return (
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<h1>Resumen</h1>
								</div>
								<div className="col-md-4">
									<Link to="/crearcampaña">
										<button className="btn btn-success">Crear campaña</button>
									</Link>
								</div>
								<div className="col-md-12">{campanitasres}</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
