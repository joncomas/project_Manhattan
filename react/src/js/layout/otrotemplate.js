import React from "react";
import { Route } from "react-router-dom";
import PropType from "prop-types";
import "../../styles/otrotemplate.scss";

const VistaPrincipal = ({ children }) => (
	<div className="master-layout">
		{/*		<header>
			<div className="tituloforever text-center mt-5">
				<h1>LEMR - Tu lugar de internet favorito para comprar y vender</h1>
			</div>
		</header>*/}
		<main>{children}</main>
	</div>
);

VistaPrincipal.propTypes = {
	children: PropType.any
};
const VistaPrincipalRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<VistaPrincipal>
					<Component {...matchProps} />
				</VistaPrincipal>
			)}
		/>
	);
};
export default VistaPrincipalRoute;
