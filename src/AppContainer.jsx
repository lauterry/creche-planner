import React from 'react';
import App from "./App";
import {connect} from 'react-redux';

class AppContainer extends React.Component {
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

export default connect(mapStateToProps)(AppContainer);