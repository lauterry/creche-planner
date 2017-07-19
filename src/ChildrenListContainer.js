import React from "react";
import axios from "axios";
import ChildrenList from "./ChildrenList";

class ChildrenListContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			children: []
		};
	}

	componentWillMount() {
		axios.get("https://script.google.com/macros/s/AKfycbwYWbZaGiiXp7CSKrJfVszdPPekrNzxdBcwiOxpuXlEIUdklAo/exec")
			.then(response => {
				this.setState({
					children: response.data
				});
			});
	}

	render() {
		return <ChildrenList children={ this.state.children }/>;
	}
}

export default ChildrenListContainer;