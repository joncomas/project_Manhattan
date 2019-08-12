import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
						<div className="container">
							<form onSubmit={this.handleSubmit} className="col-md-8 offset-4">
								<div className="row">
									<h1>LOGIN</h1>
								</div>
								<div className="col-md-12">
									<div className="row">
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
								<div className="row">
									<a>
										<button type="submit" className="btn btn-primary">
											Login
										</button>
										{/*<button onClick={this.enviarLoginUsuario} className="btn btn-primary">
										//	Login
										</button>*/}
									</a>
									<Link to="/register">
										<button className="btn btn-primary">Register</button>
									</Link>
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
