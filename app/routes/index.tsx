import { Form, Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1>Put a fucking artist in:</h1>
      <Form method="get" action="/recommend" reloadDocument>
        <label htmlFor="artist">Search</label>
        <input name="artist" type="text" />
        <button className="small" type="submit">Let's fucking go.</button>
      </Form>
      <Link className="small" to="/lucky">Fuck it, I'm feeling lucky.</Link>
    </>
  );
}
