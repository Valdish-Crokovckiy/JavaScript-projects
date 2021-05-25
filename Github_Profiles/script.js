const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('#form'),
  searchOne = document.querySelector('#search'),
  main = document.querySelector('#main')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    console.log(data)

    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No profile with this username')
    }
  }
}

async function getRepos(uname) {
  try {
    const { data } = await axios(APIURL + uname + '/repos?sort=creatred')
    //console.log(data)
    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

function createUserCard(items) {
  const { avatar_url, name, bio, followers, following, public_repos } = items
  const cardHTML = `
  		  <div class="card">
        <div>
        <img src="${avatar_url}" alt='${name}' class="avatar">
      </div>
      <div class="user-info">
          <h2>${name}</h2>
          <p>${bio}</p>

          <ul>
            <li>${followers}<strong>Followers</strong></li>
            <li>${following}<strong>Following</strong></li>
            <li>${public_repos}<strong>Repos</strong></li> 
          </ul>

          <div id="repos"></div>

         
        </div>
      </div>  
  	`
  main.innerHTML = cardHTML
}

function createErrorCard(msg) {
  const cardHTML = `
  		<div class="card">
  			<h1>${msg}</h1>
  		</div>
  	`
  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.querySelector('#repos')

  repos.slice(0, 10).forEach((item) => {
    const itemLink = document.createElement('a')
    itemLink.classList.add('repo')
    reposEl.appendChild(itemLink)

    itemLink.href = item.html_url
    itemLink.target = '_blank'
    itemLink.innerText = item.name
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = searchOne.value

  if (user) {
    getUser(user)
    searchOne.value = ''
  }
})
