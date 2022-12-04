import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { useState } from "react";

import arrayShuffle from "array-shuffle";

import { getSimilarArtists } from "~/lastfm";
import { messages } from "~/assets/messages";

import { Artist } from "~/components/Artist";


export const loader = async ({ context, params }: { params: any, context: any }) => {
  const LAST_FM_API_KEY = context.LAST_FM_API_KEY;
  
  // @TODO: add some error handling here for no/incorrect responses
  const { similarartists } = await getSimilarArtists(params.artist, LAST_FM_API_KEY);

  // if (!length(similarartists.artist)) {
  //   // Some error message here
  // }

  // As long as there are similar artists...
  return json({
    artist: params.artist,
    messages,
    similarArtists: arrayShuffle(similarartists.artist),
  });
};

export default function Artists() {
  const { messages, similarArtists } = useLoaderData();

  const [ count, setCount ] = useState(0);

  // @TODO: add some error handling here

  // Return some different markup if we're out of recommendations
  if (count >= similarArtists.length) {
    return (
      <>
        <h1>Okay, party's over.</h1>
        <Link to="/">Pick another artist.</Link>
      </>
    );
  }
  
  return (
    <>
      <h1 suppressHydrationWarning>{arrayShuffle(messages).pop()}</h1>
      
      <Artist name={similarArtists[count].name} url={similarArtists[count].url} />

      <button onClick={() => setCount(count + 1)}>I don't like that fucking artist.</button>
      <br />
      <Link to="/">I want to pick another artist.</Link>
    </>
  );
}