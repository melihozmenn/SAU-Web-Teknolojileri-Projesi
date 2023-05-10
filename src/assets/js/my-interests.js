let apiKey="12bb66af19ada7d13d5fa96ebe207ecb";
let listId="8252378";
let imagePath="http://image.tmdb.org/t/p/original"
let items = [];
axios.get(`https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}&language=tr-TR`)
  .then(function (response) {
    items = response.data.items;
    console.log(items)
    const cardHTML = items.map(item => `
    <div class="card mb-3 mt-3 w-75 mx-auto">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${imagePath}/${item.poster_path}" class="img-fluid rounded-start" alt="...">
        </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${item.title ? item.title : item.original_name}
              </h5>
              <p class="card-text">${item.overview}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>
    `).join('');
    const cardContainer = document.querySelector('#myInterestDIV');
    cardContainer.innerHTML += cardHTML;
  })
  .catch(function (error) {
    console.log(error);
  });