import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class CrearCampaña extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	botonobtenercampaña() {
		const info = {
			nombrecampaña: []
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					return (
						<div className="container">
							<div className="text-center mt-5">
								<h1>Cree su camapaña favorita</h1>
							</div>
							<div className="col-md-12">
								<form>
									<div className="form-row">
										<div className="form-group col-md-6">
											<label htmlFor="inputnombre">Nombre</label>
											<input
												type="text"
												className="form-control"
												id="inputnombre"
												placeholder="Nombre"
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputnick">Nombre de usuario</label>
											<input
												type="text"
												className="form-control"
												id="inputnick"
												placeholder="Nombre de usuario"
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputPassword1">Password</label>
											<input
												type="password"
												className="form-control"
												id="inputPassword1"
												placeholder="Password"
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputPassword2">Confirmación Password</label>
											<input
												type="password"
												className="form-control"
												id="inputPassword2"
												placeholder="Password"
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputEmail1">Email</label>
											<input
												type="email"
												className="form-control"
												id="inputEmail1"
												placeholder="Ingrese email"
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputEmail2">Confirmación Email</label>
											<input
												type="email"
												className="form-control"
												id="inputEmail2"
												placeholder="Ingrese email"
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputrut">Ingrese su rut</label>
										<input
											type="number"
											className="form-control"
											id="inputrut"
											placeholder="12345678-9"
										/>
									</div>
									<Link to="/">
										<button
											onClick={this.botonobtenercampaña}
											type="button"
											className="btn btn-primary">
											Registar cuenta
										</button>
									</Link>
									<Link to="/">
										<button className="btn btn-primary">Cancelar</button>
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
