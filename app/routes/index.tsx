import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1>Put a fucking artist in:</h1>
      <Form method="post" action="/artist" reloadDocument>
        <label htmlFor="artist">Search</label>
        <input name="artist" type="text" />
        <button type="submit">Let's fucking go.</button>
      </Form>
    </>
  );
}
