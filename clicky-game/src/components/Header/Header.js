import React from "react";
import "./Header.css";
import Icon from "../Icon";
import Message from "../Message";
import Scores from "../Scores";



class Header extends React.Component {
	render() {
		return (
			<div className="page-header bg-dark fixed-top">
				<div className="header-spacer"></div>
				<div className="row">
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						{<Icon className="header-component">
							DOGGO CLICKY GAME!
						</Icon>}
					</div>

					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<Message className="header-component">
							{this.props.message}
						</Message>
					</div>
					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<Scores className="header-component">
							{`Score: ${this.props.score} | Max Score: ${this.props.maxScore}`}
						</Scores>
					</div>
				</div>
				<div className="header-spacer"></div>
			</div >
		);
	}
}

export default Header;