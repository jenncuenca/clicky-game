import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<div className="footer bg-dark fixed-bottom">
				<div className="row">
					<div className="footer-container container">
						<div><a href="https://github.com/jenncuenca/clicky-game" target="_blank" rel="noopener noreferrer">GitHub Repo</a></div>
					</div>					
				</div>
			</div >
		);
	}
}

export default Footer;