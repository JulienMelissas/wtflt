import type { ActionFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";

export const action: ActionFunction = async ({
  request,
}) => {
  const formData = await request.formData();

  // If there's no artist, redirect to home
  if (!formData.get("artist")) {
    return redirect("/");
  }

  return redirect(`/artist/${formData.get("artist")}`);
};

// If someone hits the /artist route without any form data, redirect to home 
export const loader = async () => {
  return redirect("/");
}