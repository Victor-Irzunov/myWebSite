
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
		case 'preimushestva-i-nedostatki-sajta-na-konstruktore':
			const { dataArticle3 } = await import('@/constans/articles/dataArticle3');
			data = dataArticle3;
			break
		case 'unikalnyj-sajt-sozdannyj-opytnym-razrabotchikom':
			const { dataArticle4 } = await import('@/constans/articles/dataArticle4');
			data = dataArticle4;
			break
	}

	return { data };
}