const list = document.querySelector('#results');
const form = document.querySelector('#search-form');

const fetchUsers = (userInfo) => {
  fetch(`https://api.github.com/users/${userInfo}`)
   .then(response => response.json())
   .then(data => {
    let name = ''
    let bio = ''

    if (data.name === null){
      alert("Your name is not set on github, so i am gonna show you your username")
      name = data.login
    }else{
      name = data.name
    }

    if (!data.bio){
      bio = ``
    }else{
      bio = `<p>${data.bio}</p>`
    }
    const users = `<li class = "list-inline-item">
      <img src = "${data.avatar_url}">
      <p>${name}</p>
      ${bio}
      <p>Followers: ${data.followers}---Following: ${data.following}</p>
      <p>Public Repos: ${data.public_repos}</p>
      <a href=${data.html_url}>Take me to github</a>


      </li>`
      if (data.avatar_url !== undefined){
        list.insertAdjacentHTML('beforeend', users)
      }else{
        alert('couldnot find the user')
      }
      // data.forEach(e => {
    //   // console.log(e);
    //   const users = `<li class = "list-inline-item">
    //   <img src = "${e.avatar_url}">
    //   <p>${e.login}</p>
    //   </li>`
    //   list.insertAdjacentHTML('beforebegin', users)
    // });
  });
}
// fetchUsers()
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let userInfo = e.currentTarget.querySelector('.form-control');
  list.innerHTML = '';
  fetchUsers(userInfo.value);
  userInfo.value = '';
});
