const { schedule } = require("@netlify/functions");
const axios = require("axios");

const refreshInstagramToken = async function (event, context) {
	const longLivedToken = process.env.INSTAGRAM_LONG_LIVED_TOKEN; // Make sure to set this env var in Netlify

	const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedToken}`;

	try {
		const response = await axios.get(url);
		const newLongLivedToken = response.data.access_token;

		// You'll want to update this new long-lived token where you're storing it,
		// whether that's in an environment variable, database, etc.
		console.log("New long-lived token:", newLongLivedToken);

		return {
			statusCode: 200,
			body: JSON.stringify({ newLongLivedToken }),
		};
	} catch (error) {
		console.error("Failed to refresh long-lived token", error);

		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Failed to refresh long-lived token" }),
		};
	}
};

exports.handler = schedule("@monthly", refreshInstagramToken);
