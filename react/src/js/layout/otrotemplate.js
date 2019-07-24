import React from "react";
import { Route } from "react-router-dom";
import PropType from "prop-types";

const VistaPrincipal = ({ children }) => (
	<div className="master-layout">
		<header>
			<h1>ola k ase - header vista princpal</h1>
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
