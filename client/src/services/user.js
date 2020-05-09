import config from '../config';

async function getUsers() {
  try {
    const response = await fetch(`${config.API}/users`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { getUsers };
