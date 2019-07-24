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
										<label htmlFor="inputEmail4">Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail4"
											placeholder="Email"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Password</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword4"
											placeholder="Password"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress">Address</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="1234 Main St"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress2">Address 2</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										placeholder="Apartment, studio, or floor"
									/>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputCity">City</label>
										<input type="text" className="form-control" id="inputCity" />
									</div>
									<div className="form-group col-md-4">
										<label htmlFor="inputState">State</label>
										<select id="inputState" className="form-control">
											<option selected>Choose...</option>
											<option>...</option>
										</select>
									</div>
									<div className="form-group col-md-2">
										<label htmlFor="inputZip">Zip</label>
										<input type="text" className="form-control" id="inputZip" />
									</div>
								</div>
								<div className="form-group">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" id="gridCheck" />
										<label className="form-check-label" htmlFor="gridCheck">
											Check me out
										</label>
									</div>
								</div>
								<Link to="/login">
									<button type="submit" className="btn btn-primary">
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
