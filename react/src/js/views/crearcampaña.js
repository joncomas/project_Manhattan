import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export class CrearCampaña extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.nombredelacampaña = React.createRef();
		this.state = {
			inputsTotales: {
				nombrecampaña: "",
				inlineRadioOptions: ""
			}
		};
	}
	botonValidarInfo(e) {
		console.log("En algún momento, este botón va a validar información.");
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					return (
						<div className="container">
							<div className="text-center mt-5">
								<h1>Cree su camapaña favorita</h1>
							</div>
							<div className="col-md-12">
								<form>
									<div className="form-row">
										<div className="form-group col-md-12">
											<label htmlFor="inputnombre">Nombre de su campaña</label>
											<input
												type="text"
												className="form-control"
												id="inputnombre"
												placeholder="Nombre de su campaña"
												name="nombrecamp"
												onChange={e => this.actioncontext.obtenerDataCamp(e)}
											/>
										</div>
										<div className="form-group col-md-12">
											<div className="col-md-12">
												<p>Elige tipo de campaña</p>
											</div>
											<div className="col-md-12">
												<div className="form-check form-check-inline col-md-3 m-0">
													<input
														className="form-check-input"
														type="radio"
														name="inlineRadioOptions"
														id="inlineRadio1"
														value="option1"
														onChange={e => this.actioncontext.obtenerDataCamp(e)}
													/>
													<label className="form-check-label" htmlFor="inlineRadio1">
														<i>Whatsapp</i>
													</label>
												</div>
											</div>
										</div>
										<div className="form-group col-md-12">
											<p>Elige dónde se realizará la camapaña</p>
										</div>
										<div className="dropdown">
											<a
												className="btn btn-secondary dropdown-toggle"
												href="#"
												role="button"
												id="dropdownMenuLink"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false">
												Donde se realizará
											</a>
											<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
												<a className="dropdown-item" href="#">
													Yapo
												</a>
											</div>
										</div>
										<div className="form-group col-md-12">
											<hr />
										</div>
									</div>
									<Link to="/">
										<button
											onClick={e => this.botonValidarInfo(e)}
											type="button"
											className="btn btn-primary">
											Registar cuenta
										</button>
									</Link>
									<Link to="/">
										<button className="btn btn-primary">Cancelar</button>
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
