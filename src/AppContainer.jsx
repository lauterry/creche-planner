import React from 'react';
import App from "./App";
import {fetchChildren} from "./childrenActionCreator";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

class AppContainer extends React.Component {

	componentWillMount() {
		this.props.fetchChildren();
	}

	render () {
		return (
			<App {... this.props}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		bebes: state.enfants.bebes,
		moyens: state.enfants.moyens
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({fetchChildren}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);