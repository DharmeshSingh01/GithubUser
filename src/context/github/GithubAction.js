import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const searchUser = async (text) => {
  const param = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${param}`);

  return response.data.items;
  /*
  const response = await fetch(`${GITHUB_URL}/search/users?${param}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();

  return items;
  */
};

//########################################## Get User Repository #############################

export const getUserRepos = async (login) => {
  const param = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const response = await github.get(`/users/${login}/repos?${param}`);
  return response.data;
  /*
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${param}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
  */
};

//########################## Get User ##########################################
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
    //console.log(data);
    // setTimeout(() => {
    //   dispatch({
    //     type: 'GET_USER',
    //     payload: data,
    //   });
    // }, 1000);
  }
};
//##################### Get User And Repos #########################################

export const getUserAndRepos = async (login) => {
  const param = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${param}`),
  ]);
  return { user: user.data, repos: repos.data };
};
