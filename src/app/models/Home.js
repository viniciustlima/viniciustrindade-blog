class Home {
	getPosts = (period) => {
		return [
			{
				id: 1,
				title: "titulo 1",
				author: "vinicius",
				content: "conteudo",
			},
			{
				id: 2,
				title: "titulo 2",
				author: "vinicius",
				content: "conteudo",
			},
			{
				id: 3,
				title: "titulo 3",
				author: "vinicius",
				content: "conteudo",
			},
		];
	};
}

module.exports = new Home();
