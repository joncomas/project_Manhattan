import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class HomeReal extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					return (
						<div className="container">
							<div className="col-md-8 offset-4">
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
										/>
										<input
											type="password"
											className="form-control"
											placeholder="Password"
											id="contraseña"
										/>
									</div>
								</div>
								<div className="row">
									<Link to="/">
										<button className="btn btn-primary">Login</button>
									</Link>
									<Link to="/register">
										<button className="btn btn-primary">Register</button>
									</Link>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
