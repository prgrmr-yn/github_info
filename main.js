const list = document.querySelector('#results');
const form = document.querySelector('#search-form');
console.log(form);

const fetchUsers = (userInfo) => {
  fetch(`https://api.github.com/users/${userInfo}`)
   .then(response => response.json())
   .then(data => {
    if (data.length === 1) {
      console.log('hello');
    }
    const users = `<li class = "list-inline-item">
      <img src = "${data.avatar_url}">
      <p>${data.login}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>

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
