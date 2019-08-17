import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/homereal.scss";

export class HomeReal extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		this.actioncontext.loginUsuario(this.storecontext.inputsLogin, this.props.history);
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="logintodo container">
							<form onSubmit={this.handleSubmit}>
								<div className="col-md-3 offset-5">
									<div className="row">
										<h3>LOGIN</h3>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="col-md-5 offset-4">
											<input
												type="text"
												className="form-control"
												placeholder="Usuario"
												id="usuario"
												name="username"
												onChange={e => this.actioncontext.obtenerDatosLogin(e)}
												onSubmit={this.handleSubmit}
												required
											/>
										</div>
										<div className="col-md-5 offset-4">
											<input
												type="password"
												className="form-control"
												placeholder="Password"
												id="contraseña"
												name="password"
												onChange={e => this.actioncontext.obtenerDatosLogin(e)}
												onSubmit={this.handleSubmit}
												required
											/>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-5 offset-5">
											<button type="submit" className="btn btn-primary">
												Login
											</button>
											<Link to="/register">
												<button className="btn btn-primary">Register</button>
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

HomeReal.propTypes = {
	history: PropTypes.any
};
