import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class CrearCampaña extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.nombredelacampaña = React.createRef();
		this.state = {
			variableparaquenosemeolvidequeexisteelestate: []
		};
		this.botonValidarInfo = this.botonValidarInfo.bind(this);
	}
	botonValidarInfo(e) {
		this.actioncontext.registroCamp(this.storecontext.inputsCamp);
		//console.log("En algún momento, este botón va a validar información.");
	}
	handleSubmit = e => {
		e.preventDefault();
		alert("se ha creado con éxito su campaña");
		this.actioncontext.registroCamp(this.storecontext.inputsCamp, this.props.history);
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="container">
							<div className="text-center mt-5">
								<h1>Cree su camapaña favorita</h1>
							</div>
							<div className="col-md-12">
								<form onSubmit={this.handleSubmit}>
									<div className="form-row">
										<div className="form-group col-md-12">
											<label htmlFor="inputnombre">Nombre de su campaña</label>
											<input
												type="text"
												className="form-control"
												id="inputnombre"
												placeholder="Nombre de su campaña"
												name="name_camp"
												onChange={e => this.actioncontext.obtenerDataCamp(e)}
												required
											/>
										</div>
										<div className="form-group col-md-12">
											<label htmlFor="inputnombre">Ingrese la URL a buscar</label>
											<input
												type="text"
												className="form-control"
												id="inputnombre"
												placeholder="https://www.algo.algo"
												name="item_to_search"
												onChange={e => this.actioncontext.obtenerDataCamp(e)}
												required
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
														//onChange={e => this.actioncontext.obtenerDataCamp(e)}
													/>
													<label className="form-check-label" htmlFor="inlineRadio1">
														<i>Whatsapp</i>
													</label>
												</div>
											</div>
										</div>
										<div className="form-group col-md-12">
											<p>Elige dónde se realizará la campaña</p>
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
												<a
													className="dropdown-item"
													href="#"
													name="search_target"
													onChange={e => this.actioncontext.obtenerDataCamp(e)}>
													Yapo
												</a>
											</div>
										</div>
										<div className="form-group col-md-12">
											<label htmlFor="exampleFormControlTextarea1">
												¿Estás triste? Escribe lo que quieras
											</label>
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
												name="details"
												onChange={e => this.actioncontext.obtenerDataCamp(e)}
												required
											/>
										</div>
										<div className="form-group col-md-12">
											<hr />
										</div>
									</div>
									<button type="submit" className="btn btn-primary">
										Crear campaña
									</button>
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

CrearCampaña.propTypes = {
	history: PropTypes.any
};
