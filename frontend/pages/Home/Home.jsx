const React = require("react")
const {
  Link,
} = require("react-router-dom")
require("./home.css")

function Home() {
  return (
    <div className="home">
      <h1 className="home_title">
        I am Kirill Timchenko, a software developer.
      </h1>
      <Link to="/todo" className="home_link">
        - CHECK OUT MY APPS -
      </Link>
    </div>
  )
}

module.exports = Home
