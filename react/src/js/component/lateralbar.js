import React from "react";
import { Context } from "../store/appContext";

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
								<a className="nav-link active" href="#">
									Active
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
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
