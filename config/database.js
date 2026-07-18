const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`StudyNotion DB Connection Success`))
		.catch((err) => {
			console.log(`StudyNotion DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
