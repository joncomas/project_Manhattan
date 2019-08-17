import React from "react";
import loginImg from "../../../img/lemur-logo.jpg";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	handleSubmit = e => {
		e.preventDefault();
		this.actioncontext.loginUsuario(this.storecontext.inputsLogin, this.props.historia);
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="base-container" ref={this.props.containerRef}>
							<div className="header">Login</div>
							<form onSubmit={this.handleSubmit}>
								<div className="content">
									<div className="image">
										<img src={loginImg} />
									</div>
									<div className="form">
										<div className="form-group">
											<label htmlFor="username">Username</label>
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
										<div className="form-group">
											<label htmlFor="password">Password</label>
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
								<div className="footer">
									<button type="submit" className="btn btn-primary">
										Login
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

Login.propTypes = {
	historia: PropTypes.any,
	containerRef: PropTypes.any
};
