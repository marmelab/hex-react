import { IA_ENDPOINT } from 'react-native-dotenv';

export const fetchIsWon = async (grid, player) => {
  try {
    const url = `${IA_ENDPOINT}/games/is-won`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ array: grid, player }),
    });
    return await response.json();
  } catch (error) {
    console.error('apierror', error);
  }
};
