import React from "react";
import { Route } from "react-router-dom";
import PropType from "prop-types";

const VistaPrincipal = ({ children }) => (
	<div className="master-layout">
		<header>
			<div className="text-center mt-5">
				<h1>LEMR - Tu lugar para comprar y vender favorito de internet</h1>
			</div>
		</header>
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
