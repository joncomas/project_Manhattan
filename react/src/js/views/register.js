import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Registro extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	botonobtenerregistro() {
		this.actioncontext.agregarUsuario(this.storecontext.inputsRegistro);
		console.log("Este botón va a validar informacion en algún momento");
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="container">
							<form>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputnombre">Nombre</label>
										<input
											type="text"
											className="form-control"
											id="inputnombre"
											placeholder="Nombre"
											name="nombre"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputnick">Nombre de usuario</label>
										<input
											type="text"
											className="form-control"
											id="inputnick"
											placeholder="Nombre de usuario"
											name="inputnick"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword1">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword1"
											placeholder="Password"
											name="inputPassword1"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
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
											name="inputEmail1"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
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
										name="inputrut"
										onChange={e => this.actioncontext.obtenerDataRegistro(e)}
									/>
								</div>
								<Link to="/login">
									<button
										onClick={this.botonobtenerregistro}
										type="button"
										className="btn btn-primary">
										Registar cuenta
									</button>
								</Link>
								<Link to="/login">
									<button className="btn btn-primary">Cancelar</button>
								</Link>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
