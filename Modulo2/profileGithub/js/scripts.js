let userHistory= []

async function getUser() {
  const user = document.getElementById('username').value
  const URL = `https://api.github.com/users/${user}`

  
  
  $.getJSON(URL, (user) => {
    setUserData(user, true)
    setHistory(user)
  }).fail(() => {
    setUserData(user, false)
  })
}

function setUserData(user, status) {
  document.getElementById('errormessage').innerHTML = status? "" : `
    <div class='alert alert-danger' role='alert'>
      Usuário não encontrado, erro 404
    </div>
    `

  document.getElementById("name").innerHTML = user.name ? user.name : ""
  document.getElementById("html-url").innerHTML = user.html_url? user.html_url : ""
  document.getElementById("company").innerHTML = user.company ?user.company: ""
  document.getElementById("avatarurl").innerHTML = status?  `
  <img src=${user.avatar_url} id="avatar_url" alt="avatarURL" width="250" class="shadow rounded">  `: ""
}


function setHistory(user) {
  if(userHistory.filter((u) => u === user.id).length == 0){
    document.getElementById("history").innerHTML += `
    <div class="col">
          <img src=${user.avatar_url} id="avatar_url" alt="avatarURL" width="125" class="shadow rounded">
        </div>
    `
    userHistory.push(user.id)
  }
}