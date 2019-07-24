import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeReal } from "./views/homereal";
import { Home } from "./views/home";
import { Registro } from "./views/register";
import injectContext from "./store/appContext";

import MasterLayoutRoute from "./layout/template";
import VistaPrincipalRoute from "./layout/otrotemplate";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LateralBar } from "./component/lateralbar";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Switch>
							<MasterLayoutRoute exact path="/" component={Home} />
							<VistaPrincipalRoute exact path="/login" component={HomeReal} />
							<Route exact path="/register" component={Registro} />
							<Route render={() => <h1>Error 404!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
