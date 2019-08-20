import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { LateralBar } from "../component/lateralbar";
import PropType from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/template.scss";
import { Footer } from "../component/footer";

const MasterLayout = ({ children }) => {
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				{
					//console.log(store.InputsToken);
					return Object.keys(store.InputsToken).length === 0 ? (
						<Redirect to="/login" />
					) : (
						<div className=" shit">
							<header>
								<Navbar />
							</header>
							<div className="row">
								<div className="col-sm-3">
									<LateralBar />
								</div>
								<div className=" conido col-sm-9">
									<main>{children}</main>
								</div>
								<footer className="col-md-2 offset-md-6">
									<Footer />
								</footer>
							</div>
						</div>
					);
				}
			}}
		</Context.Consumer>
	);
};

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
