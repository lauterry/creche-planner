import React from "react";
import "./children.css";

class ChildrenList extends React.PureComponent {

	render() {
		return <div className="children">
			<div className="children__header">
				<div className="children__title">Nom</div>
				<div className="children__title">Prénom</div>
				<div className="children__title">Section</div>
				<div className="children__title">Présent</div>
				<div className="children__title">Lundi arrivée</div>
				<div className="children__title">Lundi départ</div>
				<div className="children__title">Mardi arrivée</div>
				<div className="children__title">Mardi départ</div>
				<div className="children__title">Mercredi arrivée</div>
				<div className="children__title">Mercredi départ</div>
				<div className="children__title">Jeudi arrivée</div>
				<div className="children__title">Jeudi départ</div>
				<div className="children__title">Vendredi arrivée</div>
				<div className="children__title">Vendredi départ</div>
			</div>
			<div className="children__body">
			{
				this.props.children.map(child => {
					return <div className="children__row">
						<div className="children__column">{ child.nom }</div>
						<div className="children__column">{ child.prenom }</div>
						<div className="children__column">{ child.section }</div>
						<div className="children__column">{ child.present }</div>
						<div className="children__column">{ child.lundi_arrivee }</div>
						<div className="children__column">{ child.lundi_depart }</div>
						<div className="children__column">{ child.mardi_arrivee }</div>
						<div className="children__column">{ child.mardi_depart }</div>
						<div className="children__column">{ child.mercredi_arrivee }</div>
						<div className="children__column">{ child.mercredi_depart }</div>
						<div className="children__column">{ child.jeudi_arrivee }</div>
						<div className="children__column">{ child.jeudi_depart }</div>
						<div className="children__column">{ child.vendredi_arrivee }</div>
						<div className="children__column">{ child.vendredi_depart }</div>
					</div>
				})
			}
			</div>
		</div>
	}
}

export default ChildrenList;