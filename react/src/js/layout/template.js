import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { LateralBar } from "../component/lateralbar";
import PropType from "prop-types";

const MasterLayout = ({ children }) => (
	<div className="master-layout">
		<header>
			<Navbar />
		</header>
		<LateralBar />
		<main>{children}</main>
	</div>
);

MasterLayout.propTypes = {
	children: PropType.any
};

const MasterLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<MasterLayout>
					<Component {...matchProps} />
				</MasterLayout>
			)}
		/>
	);
};
export default MasterLayoutRoute;
