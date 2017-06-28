import React from 'react';
import {Link, getCurrentRequestContext,logging} from 'react-server';

const links = [
	{
		label: "Home",
		path: "/",
		internal: true,
	},
	{
		label: "About",
		path: "/about",
		internal: true,
	}
]

const HeaderLink = ({label, path, internal}) => {
	if (internal) {
			return <li key={path}><Link path={path} bundleData>{label}</Link></li>
		} else {
			return <li key={path}><a target="_blank" href={path}>{label}</a></li>
		}
	}

const logger = logging.getLogger(__LOGGER__);

export default class Home extends React.Component {




	constructor(props) {
		super(props);
		this.state = {exclamationCount: 0};
		this.handleClick = () => {
			logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
			this.setState({exclamationCount: this.state.exclamationCount + 1});
		};
	}

	render() {
		return (
			<div>
				 <ul>
						{links.map(HeaderLink)}
					</ul>
				<h2>C</h2>
			</div>
		);
	}
}
