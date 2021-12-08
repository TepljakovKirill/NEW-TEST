const createLoader = (onSuccess, onError) => {
	fetch("http://localhost:3000/data", {
		method: "GET",
		credentials: "same-origin",
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}

			throw new Error(`${response.status} ${response.statusText}`);
		})

		.then((data) => {
			onSuccess(data);
		})
		.catch((err) => {
			onError(err);
		});
};

export { createLoader };

// const createLoader = () => {
// 	fetch('http://localhost:3000/data')
// 	.then((response) => response.json())
// 	.then((data) => {
// 				console.log(data);
// 			})
// }

// export {createLoader};
