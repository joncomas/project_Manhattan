import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class Registro extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.nombredelapersona = React.createRef();
		this.nombredeusuario = React.createRef();
		this.passwordusuario = React.createRef();
		this.emiliousuario = React.createRef();
		this.rutusuario = React.createRef();
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
		this.botonobtenerregistro = this.botonobtenerregistro.bind(this);
	}
	botonobtenerregistro() {
		const info = {
			nombre: this.nombredelapersona.current.value,
			nick: this.nombredeusuario.current.value,
			pass: this.passwordusuario.current.value,
			emilio: this.emiliousuario.current.value,
			rut: this.rutusuario.current.value
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
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
											ref={this.nombredelapersona}
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputnick">Nombre de usuario</label>
										<input
											type="text"
											className="form-control"
											id="inputnick"
											placeholder="Nombre de usuario"
											ref={this.nombredeusuario}
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword1">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword1"
											placeholder="Password"
											ref={this.passwordusuario}
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
											ref={this.emiliousuario}
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
										ref={this.rutusuario}
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
