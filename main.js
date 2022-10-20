const list = document.querySelector('#results');
const form = document.querySelector('#search-form');
console.log(form);

const fetchUsers = (userInfo) => {
  fetch(`https://api.github.com/users/${userInfo}`)
   .then(response => response.json())
   .then(data => {
    let name = ''
    if (data.name === null){
      alert("Your name is not set on github, so i am gonna show you your username")
      name = data.login
    }else{
      name = data.name
    }
    const users = `<li class = "list-inline-item">
      <img src = "${data.avatar_url}">
      <p>${name}</p>
      <p>Followers: ${data.followers}---Following: ${data.following}</p>
      <p>Public Repos: ${data.public_repos}</p>

      </li>`
      list.insertAdjacentHTML('beforeend', users)
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
  const userInfo = e.currentTarget.querySelector('.form-control').value;
  fetchUsers(userInfo)
});
