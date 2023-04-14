

export default async function traer_api() {
	try {
			const chuck = await fetch('https://api.chucknorris.io/jokes/categories').then((res) => {
				return res.json();
			});
			return chuck.results;
	} catch (error) {
		console.log(error);
	}
}