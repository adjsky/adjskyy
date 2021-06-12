const React = require("react")
require("./home.css")

function Home() {
  return (
    <div className="home">
      <h1 className="home_title">
        I am Kirill Timchenko, a software developer.
      </h1>
      <a href="https://github.com/adjsky" target="_blank" rel="noreferrer" className="home_link">
        - CHECK OUT MY APPS -
      </a>
    </div>
  )
}

module.exports = Home
