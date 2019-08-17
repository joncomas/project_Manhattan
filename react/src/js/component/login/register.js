import React from "react";
import loginImg from "../../../img/lemur-logo.jpg";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { validate, clean, format } from "rut.js";

export class Register extends React.Component {
	constructor(props) {
		super(props);
		this.actioncontext = null;
		this.storecontext = null;
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
		if (validate(this.storecontext.inputsRegistro.rut) === false) {
			alert("Escriba un rut válido");
			return;
		}
		this.actioncontext.registroUsuario(this.storecontext.inputsRegistro, this.props.historia);
		alert("Su usuario ha sido creado con éxito");
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="base-container" ref={this.props.containerRef}>
							<div className="header">Register</div>
							<form onSubmit={this.handleSubmit}>
								<div className="content">
									<div className="image">
										<img src={loginImg} />
									</div>
									<div className="form">
										<div className="form-group">
											<label htmlFor="inputnombre">Nombre real</label>
											<input
												type="text"
												className="form-control"
												id="inputnombre"
												placeholder="Nombre real"
												name="first_name"
												onChange={e => this.actioncontext.obtenerDataRegistro(e)}
												required
												maxLength="25"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="username">Username</label>
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
										<div className="form-group">
											<label htmlFor="email">Email</label>
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
										<div className="form-group">
											<label htmlFor="email">Confirm email</label>
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
										<div className="form-group">
											<label htmlFor="password">Password</label>
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
										<div className="form-group">
											<label htmlFor="password">Confirm password</label>
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
										<div className="form-group">
											<label htmlFor="inputrut">Rut</label>
											<input
												type="text"
												className="form-control"
												id="inputrut"
												placeholder="12345678-9"
												name="rut"
												onChange={e => this.actioncontext.obtenerDataRegistro(e)}
												onSubmit={this.handleSubmit}
											/>
										</div>
									</div>
								</div>
								<div className="footer">
									<button type="submit" className="btn btn-primary">
										Registar cuenta
									</button>
								</div>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Register.propTypes = {
	historia: PropTypes.any,
	containerRef: PropTypes.any
};
