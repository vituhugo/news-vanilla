function carregarArticles(event) {
    //URL DA API COM A CHAVE
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=b6db56e67e564c2f8c0bd36e3ecbb809';

    var req = new Request(url);

    let container = document.getElementById('noticias');
    fetch(req)
        .then(function (response) {
            response.json().then(function (data) {
                data.articles.forEach(function (article) {
                    container.innerHTML += `
                        <div class="col-6">
                            <div class="card">
                                <div class="card-header">
                                    <h2 class="card-title">${article.title}</h2>
                                </div>
                                <div class="card-body">
                                    <img src="${article.urlToImage}" width="180" height="180">
                                    <p>${article.description}</p>
                                </div>
                                <div class="card-footer">
                                    <a href="${article.url}" class="btn btn-primary">Ver noticia</a>
                                </div>
                            </div>
                        </div>
                    `
                })
            })
        })
}

document.querySelector('#exibir-noticias').onclick = carregarArticles