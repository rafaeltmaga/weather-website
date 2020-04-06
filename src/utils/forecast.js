const request = require('request');

const forecast = (lat, long, callback) => {
	const url = `https://api.darksky.net/forecast/36cef3ef912431cf408a5efaae1d3ff7/${encodeURIComponent(
		lat
	)},${encodeURIComponent(long)}?units=si&lang=pt`;

	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			console.log('Unable to connect to weather service!');
		} else if (body.error) {
			console.log('Unable to find location');
		} else {
			callback(
				undefined,
				`${body.daily.data[0].summary} No momento está fazendo ${body.currently
					.temperature}°C. A probabilidade de chuva durante o dia é de ${body.currently.precipProbability *
					100}%.`
			);
		}
	});
};

module.exports = forecast;
