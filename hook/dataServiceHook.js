
export const useDataService = async (link) => {
	let data;

	switch (link) {
		case 'sozdanie-mnogostranichnogo-sajta':
			const { dataMnogostranichnogoSajta } = await import('@/constans/service/dataMnogostranichSite');
			data = dataMnogostranichnogoSajta;
			break
	
	
	}

	return { data };
}