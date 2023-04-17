// module.exports = (res) => {
// 	res.status(200).send(`Hello World!`);
// };

module.exports = (req, res) => {
	const name = req.query.name || "stranger";
	res.status(200).send(`Hello, ${name}!`);
};
