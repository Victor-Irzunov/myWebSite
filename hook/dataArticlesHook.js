
export const useDataArticles = async (link) => {
	let data;

	switch (link) {
		case 'kak-zakazat-horoshij-sajt-i-ne-pereplachivat':
			const { dataArticle1 } = await import('@/constans/articles/dataArticle1');
			data = dataArticle1;
			break
	}

	return { data };
}