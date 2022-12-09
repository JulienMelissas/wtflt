import { redirect } from "@remix-run/cloudflare"

export const loader = async () => {
  return redirect("https://www.last.fm/music/Rick+Astley/_/Never+Gonna+Give+You+Up");
}