//URL DA API COM A CHAVE
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=b6db56e67e564c2f8c0bd36e3ecbb809';

var req = new Request(url);
fetch(req)
    .then(function (response) {
        console.log(response.json());
    })