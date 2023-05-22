const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://plagiarism-detection-api.p.rapidapi.com/retrieve?job_id=1146335');
xhr.setRequestHeader('X-RapidAPI-Key', '58c7dd1a2amshafb3783417139d8p17b413jsn7353d251c3d7');
xhr.setRequestHeader('X-RapidAPI-Host', 'plagiarism-detection-api.p.rapidapi.com');

xhr.send(data);

const data = JSON.stringify({
	key1: 'value',
	key2: 'value'
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://plagiarism-detection-api.p.rapidapi.com/plagiarism');
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('X-RapidAPI-Key', '58c7dd1a2amshafb3783417139d8p17b413jsn7353d251c3d7');
xhr.setRequestHeader('X-RapidAPI-Host', 'plagiarism-detection-api.p.rapidapi.com');

xhr.send(data);