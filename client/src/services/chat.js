import config from '../config';

async function getChatsByUser(userId) {
  try {
    const response = await fetch(`${config.API}/chats/${userId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { getChatsByUser };
