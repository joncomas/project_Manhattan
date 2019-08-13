import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Editar extends React.Component {
	constructor() {
		super();
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			variableAuxiliar: ""
		};
	}
	otraForma = e => {
		for (let i = 0; i < this.storecontext.respCamp.length; i++) {
			let arregloaux = this.storecontext.respCamp[i];
			if (arregloaux.id == this.props.match.params.id) {
				this.setState({
					variableAuxiliar: arregloaux
				});
				return;
			}
		}
	};
	componentDidMount() {
		this.otraForma();
	}
	handleSubmit = e => {
		e.preventDefault();
		alert("Se ha editado con éxito");
		this.actioncontext.editarCamp(this.storecontext.inputsCamp, this.props.match.params.id, this.props.history);
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="col-md-12">
							<div className="row">
								<h4>Debe volver a llenar la información de su campaña que está editando</h4>
							</div>
							<form onSubmit={this.handleSubmit}>
								<div className="form-row">
									<div className="form-group col-md-12">
										<label htmlFor="inputnombre">Nombre de su campaña</label>
										<input
											type="text"
											className="form-control"
											id="inputnombre"
											placeholder={this.state.variableAuxiliar.name_camp}
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
											placeholder={this.state.variableAuxiliar.item_to_search}
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
											placeholder={this.state.variableAuxiliar.details}
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
									Editar campaña
								</button>
								<Link to="/campana">
									<button className="btn btn-info">Cancelar</button>
								</Link>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Editar.propTypes = {
	history: PropTypes.any,
	match: PropTypes.any
};
