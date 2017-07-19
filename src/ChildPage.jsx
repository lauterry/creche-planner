import React from 'react';
import ChildForm from './ChildForm';
import axios from "axios";
import qs from "qs";

class ChildPage extends React.Component {

	submit = (values) => {
		const payload = qs.stringify(values);
		axios.post("https://script.google.com/macros/s/AKfycbwYWbZaGiiXp7CSKrJfVszdPPekrNzxdBcwiOxpuXlEIUdklAo/exec", payload);
	};

	render() {
		return (
			<ChildForm
				initialValues={{nom: "Naomi", prenom: "LAU", section: "bebe"}}
				onSubmit={this.submit} />
		)
	}
}

export default ChildPage;