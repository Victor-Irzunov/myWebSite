
export const useDataArticles = async (link) => {
	let data;

	switch (link) {
		case 'kak-zakazat-horoshij-sajt-i-ne-pereplachivat':
			const { dataArticle1 } = await import('@/constans/articles/dataArticle1');
			data = dataArticle1;
			break
		case 'pochemu-kachestvo-sajta-igraet-reshayushuyu-rol':
			const { dataArticle2 } = await import('@/constans/articles/dataArticle2');
			data = dataArticle2;
			break
	}

	return { data };
}