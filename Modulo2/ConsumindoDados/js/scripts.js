$.getJSON("https://api.imgflip.com/get_memes", (response) => {
  response.data.memes.map((meme) => {
    document.getElementById('memes').innerHTML += `
    <div class="card text-center m-auto mt-4 p-3 pt-1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${meme.name}</h5>
        </div>
        <img src=${meme.url} class="card-img-top shadow rouded" alt=${meme.name}>
    </div>
    `
  })
  
})