import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  return json({ artist: params.artist });
};

export default function Artist() {
  const { artist } = useLoaderData();
  
  return (
    <>
      Artist: { artist }
    </>
  );
}