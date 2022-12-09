import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { useState } from "react";

import arrayShuffle from "array-shuffle";

import { getSimilarArtists } from "~/lastfm";
import { messages } from "~/assets/messages";

import { Artist } from "~/components/Artist";

export const loader = async ({ context, request }: { context: any, request: any  }) => {
  // Load the API key up
  const LAST_FM_API_KEY = context.LAST_FM_API_KEY;
  
  // Grab the URL params
  const url = new URL(request.url);
  const artist = url.searchParams.get("artist");

  // If no artist, go back home
  if (!artist) {
    return redirect("/");
  }
  
  // Call the API
  const lastfmResponse = await getSimilarArtists(artist, LAST_FM_API_KEY);

  // Go to error page if there's an error/if we don't have data we need
  if (lastfmResponse.error || !lastfmResponse.similarartists.artist) {
    return redirect("/fucked");
  }

  // ...if we do, save the data and shuffle it
  const similarArtists = arrayShuffle(lastfmResponse.similarartists.artist);

  // Pass the data on...
  return json({
    artist,
    messages,
    similarArtists,
  });
};

export default function Artists() {
  const { messages, similarArtists } = useLoaderData();

  const [ count, setCount ] = useState(0);

  // Return some different markup if we're out of recommendations
  if (count >= similarArtists.length) {
    return (
      <>
        <h1>Okay, party's over.</h1>
        <Link className="small" to="/">Pick another artist.</Link>
      </>
    );
  }
  
  return (
    <>
      <h1 suppressHydrationWarning>{arrayShuffle(messages).pop()}</h1>
      
      <Artist name={similarArtists[count].name} url={similarArtists[count].url} />

      <button className="small" onClick={() => setCount(count + 1)}>I don't like that fucking artist.</button>
      <Link className="small" to="/">I want to pick another artist.</Link>
    </>
  );
}