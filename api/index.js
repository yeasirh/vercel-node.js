// module.exports = (res) => {
// 	res.status(200).send(`Hello World!`);
// };

// module.exports = (req, res) => {
// 	const name = req.query.name || "stranger";
// 	res.status(200).send(`Hello, ${name}!`);
// };

export default function handler(request, response) {
	// api/[name].js -> /api/lee
	// request.query.name -> "lee"
	// const { name } = request.query;
	return response.end(`Hello World!`);
}
