import React from "react";
import "./Icon.css";
class Icon extends React.Component {
	render() {
		return (
			<div className={`Icon ${this.props.className}`}>
				<i className="far fa-hand-pointer"></i> {this.props.children}
			</div >
		);
	}
}

export default Icon;
