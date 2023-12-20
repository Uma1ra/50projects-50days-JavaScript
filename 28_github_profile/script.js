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
    if(err.respose.staus = 404) {
      createErrorCard("No profile with this username");
    }
  }
};