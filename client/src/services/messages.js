import config from '../config';

async function getMessagesByChat(chatId) {
  try {
    const response = await fetch(`${config.API}/messages?chat=${chatId}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function postMessage(chatId, userId, message) {
  try {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat: chatId,
        user: userId,
        message: message,
      }),
    };
    const response = await fetch(`${config.API}/messages`, fetchOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { getMessagesByChat, postMessage };
