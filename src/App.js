import React, {Component} from "react";
import {NOMBRE_BEBE_MAX_PAR_PRO, NOMBRE_MOYEN_MAX_PAR_PRO} from "./contants";
import setMinutes from "date-fns/set_minutes";
import addMinutes from "date-fns/add_minutes";
import isBefore from "date-fns/is_before";
import isAfter from "date-fns/is_after";
import isEqual from "date-fns/is_equal";
import setHours from "date-fns/set_hours";
import logo from "./logo.svg";
import "./App.css";

const JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

const HORAIRES_CLE_MATIN = ["7h30", "8h00", "8h30", "9h00", "9h30", "10h00"];
const HORAIRES_CLE_SOIR = ["16h30", "17h00", "17h30", "18h00", "18h30", "19h00"];

const BEBES = [
	{
		"name": "Bouleau Alice",
		"planning": {
			"lundi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"mardi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"mercredi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"jeudi": {
				"debut": "8h00",
				"fin": "18h00"
			}
		}
	},
	{
		"name": "Diallo Amadou Welle",
		"planning": {
			"lundi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"mardi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"mercredi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"jeudi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"vendredi": {
				"debut": "9h00",
				"fin": "17h45"
			}
		}
	},
	{
		"name": "Dop Serigne",
		"planning": {
			"lundi": {
				"debut": "10h00",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "10h00",
				"fin": "18h45"
			},
			"mercredi": {
				"debut": "10h00",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "10h00",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "Fernandes Simon",
		"planning": {
			"lundi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"mercredi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"vendredi": {
				"debut": "8h15",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "Ghanem Elias",
		"planning": {
			"lundi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"mercredi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"vendredi": {
				"debut": "7h45",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "Bouleau Alice",
		"planning": {
			"lundi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"mardi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"mercredi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"jeudi": {
				"debut": "8h00",
				"fin": "18h00"
			}
		}
	},
	{
		"name": "Diallo Amadou Welle",
		"planning": {
			"lundi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"mardi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"mercredi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"jeudi": {
				"debut": "9h00",
				"fin": "17h00"
			},
			"vendredi": {
				"debut": "9h00",
				"fin": "17h45"
			}
		}
	},
	{
		"name": "Dop Serigne",
		"planning": {
			"lundi": {
				"debut": "10h00",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "10h00",
				"fin": "18h45"
			},
			"mercredi": {
				"debut": "10h00",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "10h00",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "Fernandes Simon",
		"planning": {
			"lundi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"mercredi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "8h15",
				"fin": "18h45"
			},
			"vendredi": {
				"debut": "8h15",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "Ghanem Elias",
		"planning": {
			"lundi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"mercredi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "7h45",
				"fin": "18h45"
			},
			"vendredi": {
				"debut": "7h45",
				"fin": "18h45"
			}
		}
	}
];

const MOYENS = [
	{
		"name": "AIDEL MERYEM",
		"planning": {
			"lundi": {
				"debut": "8h45",
				"fin": "18h00"
			},
			"mardi": {
				"debut": "8h45",
				"fin": "16h00"
			},
			"mercredi": {
				"debut": "8h45",
				"fin": "18h00"
			},
			"jeudi": {
				"debut": "8h00",
				"fin": "18h00"
			}
		}
	},
	{
		"name": "AKKARI NAJIM",
		"planning": {
			"lundi": {
				"debut": "9h00",
				"fin": "17h45"
			},
			"mardi": {
				"debut": "9h30",
				"fin": "17h00"
			},
			"mercredi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"jeudi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"vendredi": {
				"debut": "9h00",
				"fin": "17h45"
			}
		}
	},
	{
		"name": "ARANGO DILAN",
		"planning": {
			"lundi": {
				"debut": "11h00",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "11h00",
				"fin": "17h45"
			},
			"mercredi": {
				"debut": "10h00",
				"fin": "16h30"
			},
			"jeudi": {
				"debut": "10h00",
				"fin": "17h45"
			}
		}
	},
	{
		"name": "BENDHAMANE INES",
		"planning": {
			"lundi": {
				"debut": "9h15",
				"fin": "17h45"
			},
			"mardi": {
				"debut": "9h15",
				"fin": "17h30"
			},
			"mercredi": {
				"debut": "9h15",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "10h15",
				"fin": "17h45"
			},
			"vendredi": {
				"debut": "8h15",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "AIDEL MERYEM",
		"planning": {
			"lundi": {
				"debut": "8h45",
				"fin": "18h00"
			},
			"mardi": {
				"debut": "8h45",
				"fin": "16h00"
			},
			"mercredi": {
				"debut": "8h45",
				"fin": "18h00"
			},
			"jeudi": {
				"debut": "8h00",
				"fin": "18h00"
			}
		}
	},
	{
		"name": "AKKARI NAJIM",
		"planning": {
			"lundi": {
				"debut": "9h00",
				"fin": "17h45"
			},
			"mardi": {
				"debut": "9h30",
				"fin": "17h00"
			},
			"mercredi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"jeudi": {
				"debut": "8h00",
				"fin": "18h00"
			},
			"vendredi": {
				"debut": "9h00",
				"fin": "17h45"
			}
		}
	},
	{
		"name": "ARANGO DILAN",
		"planning": {
			"lundi": {
				"debut": "11h00",
				"fin": "18h45"
			},
			"mardi": {
				"debut": "11h00",
				"fin": "17h45"
			},
			"mercredi": {
				"debut": "10h00",
				"fin": "16h30"
			},
			"jeudi": {
				"debut": "10h00",
				"fin": "17h45"
			}
		}
	},
	{
		"name": "BENDHAMANE INES",
		"planning": {
			"lundi": {
				"debut": "9h15",
				"fin": "17h45"
			},
			"mardi": {
				"debut": "9h15",
				"fin": "17h30"
			},
			"mercredi": {
				"debut": "9h15",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "10h15",
				"fin": "17h45"
			},
			"vendredi": {
				"debut": "8h15",
				"fin": "18h45"
			}
		}
	},
	{
		"name": "BENDHAMANE INES",
		"planning": {
			"lundi": {
				"debut": "9h15",
				"fin": "17h45"
			},
			"mardi": {
				"debut": "9h15",
				"fin": "17h30"
			},
			"mercredi": {
				"debut": "9h15",
				"fin": "18h45"
			},
			"jeudi": {
				"debut": "10h15",
				"fin": "17h45"
			},
			"vendredi": {
				"debut": "8h15",
				"fin": "18h45"
			}
		}
	}
];

class App extends Component {

	render() {

		const today = new Date();

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<div className="planning">
					{
						JOURS.map(jour => {
							return <div className="planning__day">
								<div style={ {marginTop: "20px"} }>{jour}</div>
								<div className="planning__horaire">
									<div className="planning__heure">Horaire</div>
									<div className="planning__count">Bébés</div>
									<div className="planning__count">Pro</div>
									<div className="planning__count">Moyens</div>
									<div className="planning__count">Pro</div>
								</div>

								{
									HORAIRES_CLE_MATIN.map((horaire) => {
										const bebePresents = BEBES.filter(enfant => {

											if (enfant.planning[jour] && enfant.planning[jour].debut) {
												const enfantTime = enfant.planning[jour].debut.split("h");
												const enfantHeures = enfantTime[0];
												const enfantMinutes = enfantTime[1] || 0;
												const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

												const horaireTime = horaire.split("h");
												const horaireHeures = horaireTime[0];
												const horaireMinutes = horaireTime[1] || 0;

												const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

												return isBefore(enfantDate, addMinutes(horaireDate, 15)) || isEqual(enfantDate, addMinutes(horaireDate, 15));
											}
										});

										const moyenPresents = MOYENS.filter(enfant => {

											if (enfant.planning[jour] && enfant.planning[jour].debut) {
												const enfantTime = enfant.planning[jour].debut.split("h");
												const enfantHeures = enfantTime[0];
												const enfantMinutes = enfantTime[1] || 0;
												const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

												const horaireTime = horaire.split("h");
												const horaireHeures = horaireTime[0];
												const horaireMinutes = horaireTime[1] || 0;

												const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

												return isBefore(enfantDate, addMinutes(horaireDate, 15)) || isEqual(enfantDate, addMinutes(horaireDate, 15));
											}
										});

										return <div className="planning__horaire">
											<div className="planning__heure">{horaire}</div>
											<div className="planning__count">{bebePresents.length}</div>
											<div className="planning__count">{Math.ceil(bebePresents.length / NOMBRE_BEBE_MAX_PAR_PRO)}</div>
											<div className="planning__count">{moyenPresents.length}</div>
											<div className="planning__count">{Math.ceil(moyenPresents.length / NOMBRE_MOYEN_MAX_PAR_PRO)}</div>
										</div>
									})
								}


								{
									HORAIRES_CLE_SOIR.map((horaire) => {
										const bebePresents = BEBES.filter(enfant => {
											if (enfant.planning[jour] && enfant.planning[jour].fin) {
												const enfantTime = enfant.planning[jour].fin.split("h");
												const enfantHeures = enfantTime[0];
												const enfantMinutes = enfantTime[1] || 0;
												const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

												const horaireTime = horaire.split("h");
												const horaireHeures = horaireTime[0];
												const horaireMinutes = horaireTime[1] || 0;

												const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

												return isAfter(addMinutes(enfantDate, 15), horaireDate) || isEqual(addMinutes(enfantDate,15), horaireDate);
											}
										});

										const moyenPresents = MOYENS.filter(enfant => {
											if (enfant.planning[jour] && enfant.planning[jour].fin) {
												const enfantTime = enfant.planning[jour].fin.split("h");
												const enfantHeures = enfantTime[0];
												const enfantMinutes = enfantTime[1] || 0;
												const enfantDate = setHours(setMinutes(today, enfantMinutes), enfantHeures);

												const horaireTime = horaire.split("h");
												const horaireHeures = horaireTime[0];
												const horaireMinutes = horaireTime[1] || 0;

												const horaireDate = setHours(setMinutes(today, horaireMinutes), horaireHeures);

												return isAfter(addMinutes(enfantDate, 15), horaireDate) || isEqual(addMinutes(enfantDate,15), horaireDate);
											}
										});

										return <div className="planning__horaire">
											<div className="planning__heure">{horaire}</div>
											<div className="planning__count">{bebePresents.length}</div>
											<div className="planning__count">{Math.ceil(bebePresents.length / NOMBRE_BEBE_MAX_PAR_PRO)}</div>
											<div className="planning__count">{moyenPresents.length}</div>
											<div className="planning__count">{Math.ceil(moyenPresents.length / NOMBRE_MOYEN_MAX_PAR_PRO)}</div>
										</div>
									})
								}
							</div>
						})
					}
				</div>
			</div >
		);
	}
}

export default App;
