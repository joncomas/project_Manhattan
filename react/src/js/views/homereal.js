import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/homereal.scss";
import { Login, Register } from "../component/login/index";

export class HomeReal extends React.Component {
	constructor(props) {
		super(props);
		this.actioncontext = null;
		this.storecontext = null;
		this.state = {
			isLogginActive: true
		};
	}
	componentDidMount() {
		this.rightSide.classList.add("right");
	}
	changeState() {
		const { isLogginActive } = this.state;

		if (isLogginActive) {
			this.rightSide.classList.remove("right");
			this.rightSide.classList.add("left");
		} else {
			this.rightSide.classList.remove("left");
			this.rightSide.classList.add("right");
		}
		this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
	}
	render() {
		const { isLogginActive } = this.state;
		const current = isLogginActive ? "Register" : "Login";
		const currentActive = isLogginActive ? "login" : "register";
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actioncontext = actions;
					this.storecontext = store;
					return (
						<div className="App">
							<div className="login">
								<div className="container" ref={ref => (this.container = ref)}>
									{isLogginActive && (
										<Login
											historia={this.props.history}
											containerRef={ref => (this.current = ref)}
										/>
									)}
									{!isLogginActive && (
										<Register
											historia={this.props.history}
											containerRef={ref => (this.current = ref)}
										/>
									)}
								</div>
								<RightSide
									current={current}
									currentActive={currentActive}
									containerRef={ref => (this.rightSide = ref)}
									onClick={this.changeState.bind(this)}
								/>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

const RightSide = props => {
	return (
		<div className="right-side" ref={props.containerRef} onClick={props.onClick}>
			<div className="inner-container">
				<div className="text">{props.current}</div>
			</div>
		</div>
	);
};

HomeReal.propTypes = {
	history: PropTypes.any
};
RightSide.propTypes = {
	containerRef: PropTypes.any,
	onClick: PropTypes.any,
	current: PropTypes.any
};
