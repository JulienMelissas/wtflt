import { Link } from "react-router-dom"

export default function Fucked() {
  return (
    <>
      <h1>You fucked it up.</h1>
      <Link className="small" to="/">Go back home.</Link>
    </>
  )
}