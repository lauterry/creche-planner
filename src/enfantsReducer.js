export default (enfants = {bebes: [], moyens: []}, action) => {
	switch (action.type) {
		case "FETCH_CHILDREN_SUCCESS": {
			const bebes = action.children.filter(child => {
				return child.section === "bebe";
			});

			const serializedBebes = bebes.map(bebe => {
				return {
					name: bebe.nom,
					present: bebe.present,
					planning: {
						lundi: {
							debut: bebe.lundi_arrivee,
							fin: bebe.lundi_depart,
							present: bebe.present_lundi

						},
						mardi: {
							debut: bebe.mardi_arrivee,
							fin: bebe.mardi_depart,
							present: bebe.present_mardi

						},
						mercredi: {
							debut: bebe.mercredi_arrivee,
							fin: bebe.mercredi_depart,
							present: bebe.present_mercredi

						},
						jeudi: {
							debut: bebe.jeudi_arrivee,
							fin: bebe.jeudi_depart,
							present: bebe.present_jeudi

						},
						vendredi: {
							debut: bebe.vendredi_arrivee,
							fin: bebe.vendredi_depart,
							present: bebe.present_vendredi

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
					present: moyen.present,
					planning: {
						lundi: {
							debut: moyen.lundi_arrivee,
							fin: moyen.lundi_depart,
							present: moyen.present_lundi
						},
						mardi: {
							debut: moyen.mardi_arrivee,
							fin: moyen.mardi_depart,
							present: moyen.present_mardi
						},
						mercredi: {
							debut: moyen.mercredi_arrivee,
							fin: moyen.mercredi_depart,
							present: moyen.present_mercredi
						},
						jeudi: {
							debut: moyen.jeudi_arrivee,
							fin: moyen.jeudi_depart,
							present: moyen.present_jeudi
						},
						vendredi: {
							debut: moyen.vendredi_arrivee,
							fin: moyen.vendredi_depart,
							present: moyen.present_vendredi
						}
					}
				}
			});

			const grands = action.children.filter(child => {
				return child.section === "grand";
			});

			const serializeGrands = grands.map(grand => {
				return {
					name: grand.nom,
					present: grand.present,
					planning: {
						lundi: {
							debut: grand.lundi_arrivee,
							fin: grand.lundi_depart,
							present: grand.present_lundi
						},
						mardi: {
							debut: grand.mardi_arrivee,
							fin: grand.mardi_depart,
							present: grand.present_mardi
						},
						mercredi: {
							debut: grand.mercredi_arrivee,
							fin: grand.mercredi_depart,
							present: grand.present_mercredi
						},
						jeudi: {
							debut: grand.jeudi_arrivee,
							fin: grand.jeudi_depart,
							present: grand.present_jeudi
						},
						vendredi: {
							debut: grand.vendredi_arrivee,
							fin: grand.vendredi_depart,
							present: grand.present_vendredi
						}
					}
				}
			});

			return {
				bebes: serializedBebes,
				moyens: serializedMoyens,
				grands: serializeGrands
			};
		}
		default :
			return enfants;
	}
};