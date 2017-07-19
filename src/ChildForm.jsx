import React from 'react';
import {HORAIRES_CLE_MATIN, HORAIRES_CLE_SOIR} from "./contants";
import { Field, reduxForm } from 'redux-form';

let ChildForm = props => {
	const { handleSubmit, reset } = props;
	return (
		<form onSubmit={ handleSubmit }>
			<div>
				<label htmlFor="prenom">Prénom</label>
				<Field name="prenom" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="nom">Nom</label>
				<Field name="nom" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="section">Section</label>
				<Field name="section" component="select">
					<option value="bebe">bébé</option>
					<option value="moyen">moyen</option>
				</Field>
			</div>
			<div>
				<label htmlFor="present">Présent</label>
				<Field name="present" component="input" type="checkbox" />
			</div>
			<div>
				<label htmlFor="lundi_arrivee">Lundi arrivée</label>
				<Field name="lundi_arrivee" component="select">
					<option />
					{
						HORAIRES_CLE_MATIN.map(horaire => {
							return <option value={ horaire }>{ horaire }</option>
						})
					}
				</Field>
			</div>

			{
				["lundi", "mardi", "mercredi", "jeudi", "vendredi"].map(jour => {
					return <div>
						<div>
							<label htmlFor={ `${jour}_depart` }>{ jour } départ</label>
							<Field name={ `${jour}_depart` } component="select">
								<option />
								{
									HORAIRES_CLE_SOIR.map(horaire => {
										return <option value={ horaire }>{ horaire }</option>
									})
								}
							</Field>
						</div>

						<div>
							<label htmlFor={ `${jour}_arrivee` }>{ jour } arrivée</label>
							<Field name={ `${jour}_arrivee` } component="select">
								<option />
								{
									HORAIRES_CLE_MATIN.map(horaire => {
										return <option value={ horaire }>{ horaire }</option>
									})
								}
							</Field>
						</div>
					</div>
				})
			}

			<button type="submit">Ajouter</button>
			<button type="reset" onClick={ reset }>Vider</button>
		</form>
	)
};

ChildForm = reduxForm({
	form: 'child-form'
})(ChildForm);

export default ChildForm;