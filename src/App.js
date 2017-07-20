import React, {Component} from "react";
import {
	NOMBRE_BEBE_MAX_PAR_PRO,
	NOMBRE_MOYEN_MAX_PAR_PRO,
	JOURS,
	HORAIRES_CLE_MATIN,
	HORAIRES_CLE_SOIR
} from "./contants";
import setMinutes from "date-fns/set_minutes";
import addMinutes from "date-fns/add_minutes";
import isBefore from "date-fns/is_before";
import isAfter from "date-fns/is_after";
import isEqual from "date-fns/is_equal";
import setHours from "date-fns/set_hours";
import "./App.css";

class App extends Component {

	render() {

		const {bebes = [], moyens = []} = this.props;

		const today = new Date();

		const showLoading = bebes.length === 0 && moyens.length === 0;

		return (
			<div className="app">

				<div className="actions">
					<a className="actions__button" target="_blank" href="https://docs.google.com/spreadsheets/d/1XTkgsw4YKXWfCQn6X79zjVPGZkDw7MqH_5I9YPC5M-Y/edit#gid=0">Modifier le planning</a>
				</div>

				{
					showLoading ?
						<div className="planning__loader">
							<div className='contain'>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
								<svg height='80' width='210'>
									<ellipse cx='25' cy='20' fill='none' rx='10' ry='10'></ellipse>
								</svg>
							</div>
						</div>
						:
						<div className="planning">
							{
								JOURS.map((jour, index) => {
									return <div key={index} className="planning__day">
										<div className="planning__jour">{jour}</div>
										<div className="planning__title">
											<div className="planning__heure">Horaire</div>
											<div className="planning__count planning__count--bebe">Bébés</div>
											<div className="planning__count planning__count--bebe">Pro</div>
											<div className="planning__count planning__count--moyen">Moyens</div>
											<div className="planning__count planning__count--moyen">Pro</div>
										</div>

										{
											HORAIRES_CLE_MATIN.map((horaire, index) => {
												const bebePresents = bebes.filter(enfant => {

													if (enfant.planning[jour] && enfant.planning[jour].debut) {
														const enfantTime = enfant.planning[jour].debut.split("H");
														const enfantHeures = enfantTime[0];
														const enfantMinutes = enfantTime[1] || 0;
														const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

														const horaireTime = horaire.split("H");
														const horaireHeures = horaireTime[0];
														const horaireMinutes = horaireTime[1] || 0;

														const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

														return isBefore(enfantDate, addMinutes(horaireDate, 15)) || isEqual(enfantDate, addMinutes(horaireDate, 15));
													}
												});

												const moyenPresents = moyens.filter(enfant => {

													if (enfant.planning[jour] && enfant.planning[jour].debut) {
														const enfantTime = enfant.planning[jour].debut.split("H");
														const enfantHeures = enfantTime[0];
														const enfantMinutes = enfantTime[1] || 0;
														const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

														const horaireTime = horaire.split("H");
														const horaireHeures = horaireTime[0];
														const horaireMinutes = horaireTime[1] || 0;

														const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

														return isBefore(enfantDate, addMinutes(horaireDate, 15)) || isEqual(enfantDate, addMinutes(horaireDate, 15));
													}
												});

												return <div key={index} className="planning__horaire">
													<div className="planning__heure">{horaire}</div>
													<div className="planning__count planning__count--bebe">{bebePresents.length}</div>
													<div className="planning__count planning__count--bebe">{Math.ceil(bebePresents.length / NOMBRE_BEBE_MAX_PAR_PRO)}</div>
													<div className="planning__count planning__count--moyen">{moyenPresents.length}</div>
													<div className="planning__count planning__count--moyen">{Math.ceil(moyenPresents.length / NOMBRE_MOYEN_MAX_PAR_PRO)}</div>
												</div>
											})
										}


										{
											HORAIRES_CLE_SOIR.map((horaire, index) => {
												const bebePresents = bebes.filter(enfant => {
													if (enfant.planning[jour] && enfant.planning[jour].fin) {
														const enfantTime = enfant.planning[jour].fin.split("H");
														const enfantHeures = enfantTime[0];
														const enfantMinutes = enfantTime[1] || 0;
														const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

														const horaireTime = horaire.split("H");
														const horaireHeures = horaireTime[0];
														const horaireMinutes = horaireTime[1] || 0;

														const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

														return isAfter(addMinutes(enfantDate, 15), horaireDate) || isEqual(addMinutes(enfantDate,15), horaireDate);
													}
												});

												const moyenPresents = moyens.filter(enfant => {
													if (enfant.planning[jour] && enfant.planning[jour].fin) {
														const enfantTime = enfant.planning[jour].fin.split("H");
														const enfantHeures = enfantTime[0];
														const enfantMinutes = enfantTime[1] || 0;
														const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

														const horaireTime = horaire.split("H");
														const horaireHeures = horaireTime[0];
														const horaireMinutes = horaireTime[1] || 0;

														const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

														return isAfter(addMinutes(enfantDate, 15), horaireDate) || isEqual(addMinutes(enfantDate,15), horaireDate);
													}
												});

												return <div key={index} className="planning__horaire">
													<div className="planning__heure">{horaire}</div>
													<div className="planning__count planning__count--bebe">{bebePresents.length}</div>
													<div className="planning__count planning__count--bebe">{Math.ceil(bebePresents.length / NOMBRE_BEBE_MAX_PAR_PRO)}</div>
													<div className="planning__count planning__count--moyen">{moyenPresents.length}</div>
													<div className="planning__count planning__count--moyen">{Math.ceil(moyenPresents.length / NOMBRE_MOYEN_MAX_PAR_PRO)}</div>
												</div>
											})
										}
									</div>
								})
							}
						</div>
				}


			</div >
		);
	}
}

export default App;
