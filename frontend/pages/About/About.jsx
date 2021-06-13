const React = require("react")
const AboutPic = require("../../assets/about_pic5.jpg")
require("./about.css")

class About extends React.Component {
  render() {
    return (
      <div className="about" onLoad={this.print}>
        <div className="about_wrap">
          <section className="about_info">
            <h2>About me</h2>
            <img src={AboutPic} alt="pretty" />
            <p>
              I am Kirill Timchenko, born in Russia, Birobidzhan.
              My path of becoming as a developer started in 2017.
              In summer holidays i learned html/css/javascript and made
              some web pages for fun but felt like i needed to dive deeper.
              Since that i started learning how a computer works under the hood,
              what linux kernel, c/c++ is. Also i had a great CS teacher in school
              who taught me a lot about algorithms. Theory is good but i realised
              that i should make a real software. I wanted to write an application that
              receives a text and then speaks it into a microphone. Since at that moment
              i was mainly using python, i decided to write the application using pyside5.
              After completing the project i started to study C++ and Qt5 deeply. I have
              made a cross platform mp3 player for my mother (of course it was not really great
              at all but it was literally my first big project) and a desktop application that
              solves some exam problems at the request of my teacher. Between these projects
              i found a great C++ library called SFML and thought why not to make a terraria clone.
              I have implemented procedure world generation, breaking/placing blocks, UI,
              inventory/chunk system, animations, world serialization. I dropped this project
              and maybe i&apos;ll continue working on it.
              <br />
              Once i needed to write a backend service for my application, i had a litle bit of
              experience with flask/django but i didn&apos;t like dynamically-typed languages
              for big projects, so i instantly dropped node and python. I had no desire to
              learn C# or Java but found Go and really liked it at first sight. Even now i really
              like this language since it is really simple and solves all problems related to 
              backend development.
              <br />
              Now i am focusing on web development, more on backend than frontend.
            </p>
          </section>
          <section className="about_tech">
            <h2>Tech stack</h2>
          </section>
        </div>
        <section className="about_tochange"></section>
      </div>
    )
  }
}

module.exports = About
