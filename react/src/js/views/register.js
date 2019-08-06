import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Registro extends React.Component {
	constructor() {
		super();
		this.passwordrep = null;
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		if (this.storecontext.inputsRegistro.password !== this.storecontext.inputsValidador.passwordrep) {
			alert("Escriba bien su contaseña, no coinciden");
			return;
		}
		if (this.storecontext.inputsRegistro.email !== this.storecontext.inputsValidador.emailrep) {
			alert("Escriba bien su contaseña, no coinciden");
			return;
		}
		this.actioncontext.registroUsuario(this.storecontext.inputsRegistro, this.props.history);
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="container">
							<form onSubmit={this.handleSubmit}>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputnombre">Nombre</label>
										<input
											type="text"
											className="form-control"
											id="inputnombre"
											placeholder="Nombre"
											name="first_name"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
											required
											maxLength="25"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputnick">Nombre de usuario</label>
										<input
											type="text"
											className="form-control"
											id="inputnick"
											placeholder="Nombre de usuario"
											name="username"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
											required
											maxLength="25"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword1">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword1"
											placeholder="Password"
											name="password"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword2">Confirmación Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword2"
											placeholder="Password"
											name="passwordrep"
											onChange={e => this.actioncontext.obtenerDataRegistroDos(e)}
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail1">Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail1"
											placeholder="Ingrese email"
											name="email"
											onChange={e => this.actioncontext.obtenerDataRegistro(e)}
											required
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail2">Confirmación Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail2"
											placeholder="Ingrese email"
											name="emailrep"
											onChange={e => this.actioncontext.obtenerDataRegistroDos(e)}
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputrut">Ingrese su rut</label>
									<input
										type="text"
										className="form-control"
										id="inputrut"
										placeholder="12345678-9"
										name="rut"
										onChange={e => this.actioncontext.obtenerDataRegistro(e)}
									/>
								</div>
								{/*
								<button onClick={this.botonobtenerregistro} type="button" className="btn btn-primary">
									Registar cuenta
								</button>
								*/}
								<button type="submit" className="btn btn-primary">
									Registar cuenta
								</button>
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

Registro.propTypes = {
	history: PropTypes.any
};
