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
    { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎧</text></svg>" },
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X239JYDTQV"></script>
        <script async dangerouslySetInnerHTML={{
          __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X239JYDTQV', {
            page_path: window.location.pathname,
          });
          `,
        }}>
        </script>
      </head>
      <body>
        <div className="wrap">
          <Outlet />
        </div>
        <div className="info">
          Powered by <a href="https://last.fm">Last.fm</a><br/>
          This site was fucking made by <a href="https://www.last.fm/user/julienam" target="blank">Julien</a><br/>
          This site was completely based off <br/><a href="http://www.whatthefuckshouldimakefordinner.com"  target="blank">What The Fuck Should I Make For Dinner</a><br/>
          Check out the source on <a href="https://github.com/julienMelissas/wtflt"  target="blank">GitHub</a>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
