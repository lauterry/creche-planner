export default (enfants = {bebes: [], moyens: []}, action) => {
	switch (action.type) {
		case "FETCH_CHILDREN_SUCCESS": {
			const bebes = action.children.filter(child => {
				return child.section === "bebe";
			});

			const serializedBebes = bebes.map(bebe => {
				return {
					name: bebe.nom,
					planning: {
						lundi: {
							debut: bebe.lundi_arrivee,
							fin: bebe.lundi_depart
						},
						mardi: {
							debut: bebe.mardi_arrivee,
							fin: bebe.mardi_depart
						},
						mercredi: {
							debut: bebe.mercredi_arrivee,
							fin: bebe.mercredi_depart
						},
						jeudi: {
							debut: bebe.jeudi_arrivee,
							fin: bebe.jeudi_depart
						},
						vendredi: {
							debut: bebe.vendredi_arrivee,
							fin: bebe.vendredi_depart
						}
					}
				}
			});

			const moyens = action.children.filter(child => {
				return child.section === "moyen";
			});

			const serializedMoyens = moyens.map(moyen => {
				return {
					name: moyen.nom,
					planning: {
						lundi: {
							debut: moyen.lundi_arrivee,
							fin: moyen.lundi_depart
						},
						mardi: {
							debut: moyen.mardi_arrivee,
							fin: moyen.mardi_depart
						},
						mercredi: {
							debut: moyen.mercredi_arrivee,
							fin: moyen.mercredi_depart
						},
						jeudi: {
							debut: moyen.jeudi_arrivee,
							fin: moyen.jeudi_depart
						},
						vendredi: {
							debut: moyen.vendredi_arrivee,
							fin: moyen.vendredi_depart
						}
					}
				}
			});

			return {
				bebes: serializedBebes,
				moyens: serializedMoyens
			};
		}
		default :
			return enfants;
	}
};