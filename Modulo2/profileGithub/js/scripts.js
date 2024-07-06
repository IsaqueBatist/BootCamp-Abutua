
async function getUser() {
  const user = document.getElementById('username').value
  const URL = `https://api.github.com/users/${user}`
  $.getJSON(URL, (user) => {
    document.getElementById("name").innerHTML = user.name
    document.getElementById("html-url").innerHTML = user.html_url
    document.getElementById("company").innerHTML = user.company
    document.getElementById("avatarurl").innerHTML = `
    <img src=${user.avatar_url} id="avatar_url" alt="avatarURL" width="250" class="shadow rounded">
    `

  })


}