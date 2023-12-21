const APIURL = 'https://api.github.com/users/';

const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");


async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch(err) {
    if(err.response.staus = 404) {
      createErrorCard("No profile with this username");
    }
  }
};

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    addRepoToCard(data);
  } catch(err) {
    createErrorCard("Problem fetching repos");
  }
};

function createUserCard(user) {
  const userId = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>`;
  const cardHtml = `
  <div class="card">
    <div>
      <img src="${user.avatar}" alt="${user.name}" class="avatar">
    </div>

    <div class="user-info">
      <h2>${userId}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
    </div>

    <div id="repos"></div>
  </div>
  `;
  main.innerHTML = cardHtml;
};