
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
	
	
	}

	return { data };
}