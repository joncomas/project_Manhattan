import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class LateralBar extends React.Component {
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
						<ul className="nav flex-column">
							<li className="nav-item">
								<Link to="/campana" className="nav-link active">
									Campañas activas
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/crearcampaña" className="nav-link active">
									Crear campaña
								</Link>
							</li>
							<li className="nav-item">
								<div className="dropdown">
									<a
										className="btn btn-secondary dropdown-toggle"
										href="#"
										role="button"
										id="dropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Campañas
									</a>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<a className="dropdown-item" href="#">
											Action
										</a>
										<a className="dropdown-item" href="#">
											Another action
										</a>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</div>
								</div>
							</li>
							<li className="nav-item">
								<a
									className="nav-link disabled"
									href="#"
									//tabindex="-1"
									aria-disabled="true">
									CALENDARIO O K ASE
								</a>
							</li>
						</ul>
					);
				}}
			</Context.Consumer>
		);
	}
}
