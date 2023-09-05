
export const useDataService = async (link) => {
	let data;

	switch (link) {
		case 'sozdanie-mnogostranichnogo-sajta':
			const { dataMnogostranichnogoSajta } = await import('@/constans/service/dataMnogostranichSite');
			data = dataMnogostranichnogoSajta;
			break
		case 'sozdanie-sajta-vizitki':
			const { dataSiteVizitka } = await import('@/constans/service/dataSiteVizitka');
			data = dataSiteVizitka;
			break
		case 'sozdanie-odnostranichnogo-sajta':
			const { dataOdnostranichnyj } = await import('@/constans/service/dataOdnostranichnyj');
			data = dataOdnostranichnyj;
			break
		case 'sozdanie-lendinga':
			const { dataLending } = await import('@/constans/service/dataLending');
			data = dataLending;
			break
		case 'sozdanie-internet-magazina':
			const { dataInternetMagazin } = await import('@/constans/service/dataInternetMagazina');
			data = dataInternetMagazin;
			break
	
	
	}

	return { data };
}