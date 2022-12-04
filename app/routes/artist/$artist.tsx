import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { getSimilarArtists } from "~/lastfm";

export const loader = async ({ context, params }: { params: any, context: any }) => {
  const LAST_FM_API_KEY = context.LAST_FM_API_KEY;
  const similarArtists = await getSimilarArtists(params.artist, LAST_FM_API_KEY);

  return json({
    artist: params.artist,
    similarArtists: similarArtists,
  });
};

export default function Artist() {
  const { artist, similarArtists } = useLoaderData();

  console.log(artist, similarArtists);
  
  return (
    <>
      Artist: { artist }
    </>
  );
}