import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<h1>Acá irá el contador</h1>
				</div>
				<div className="col-md-12">
					<Link to="/crearcampaña">
						<button className="btn btn-primary">Crear campaña</button>
					</Link>
				</div>
			</div>
		);
	}
}
