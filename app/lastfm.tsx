// @todo - figure out how to get this here
// const LAST_FM_API_KEY = context.LAST_FM_API_KEY;
const API_BASE = 'http://ws.audioscrobbler.com/2.0/';

/**
 * Gets Similar Artists
 * 
 * @param artist 
 * @param apiKey 
 * @returns
 */
export async function getSimilarArtists( artist: string, apiKey: string ) {
  const response = fetch(`${API_BASE}?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&autocorrect=1&format=json`).then()
  return (await response).json();
}