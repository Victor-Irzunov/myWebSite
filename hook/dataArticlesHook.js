
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
		case '10-voprosov-pered-zakazom-sajta':
			const { dataArticle5 } = await import('@/constans/articles/dataArticle5');
			data = dataArticle5;
			break
		case 'kak-sdelat-sajt-besplatno-samomu':
			const { dataArticle6 } = await import('@/constans/articles/dataArticle6');
			data = dataArticle6;
			break
		case '10-idej-dlya-sozdaniya-pribylnyh-sajtov':
			const { dataArticle7 } = await import('@/constans/articles/dataArticle7');
			data = dataArticle7;
			break
	}

	return { data };
}