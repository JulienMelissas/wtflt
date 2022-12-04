import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import normalize from "normalize.css";
import styles from "~/assets/styles.css";

export function links() {
  return [
    { rel: "stylesheet", href: normalize },
    { rel: "stylesheet", href: styles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "What The Fuck Should I Listen To Right Now?",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="super-wrap">
          <div className="wrap">
            <Outlet />
          </div>
          <div className="info">
            Powered by <strong><a href="https://last.fm">Last.fm</a></strong><br/>
            This site was fucking made by <strong><a href="https://twitter.com/JulienMelissas" target="blank">Julien</a></strong><br/>
            This site was completely based off <br/><strong><a href="http://www.whatthefuckshouldimakefordinner.com"  target="blank">What The Fuck Should I Make For Dinner</a></strong><br/>
            Check out the source on <strong><a href="https://github.com/julienMelissas/wtflt"  target="blank">GitHub</a></strong>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
