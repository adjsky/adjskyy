import React from "react"
import Image from "next/image"
import Head from "next/head"
import styles from "./About.module.css"

function About() {
  return (
    <>
      <Head>
        <title>adjsky | About</title>
        <meta name="description" content="Who adjsky is." />
      </Head>
      <div className={styles.about}>
        <div className={styles.aboutTechWrap}>
          <section className={styles.aboutCol}>
            <h2 className={styles.title}>About me</h2>
            <Image src="/about_pic5.jpg" width={640} height={427} layout="responsive" quality={100} />
            <div className={styles.aboutInfoWrap}>
              <p className={styles.aboutInfo}>
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
                i found a great C++ library called SFML and thought why not to make a terraria
                clone. I have implemented procedure world generation, breaking/placing blocks, UI,
                inventory/chunk system, animations, world serialization. I dropped this project
                and maybe i&apos;ll continue working on it.
              </p>
              <p className={styles.aboutInfo}>
                Once i needed to write a backend service for my application, i had a litle bit of
                experience with flask/django but i didn&apos;t like dynamically-typed languages
                for big projects, so i instantly dropped node and python. I had no desire to
                learn C# or Java but found Go and really liked it at first sight. Even now i really
                like this language since it is really simple and solves all problems related to
                backend development.
              </p>
              <p className={styles.aboutInfo}>
                Now i am focusing on web development, more on backend than frontend.
              </p>
            </div>
          </section>
          <section className={styles.techCol}>
            <h2 className={styles.title}>Tech stack</h2>
            <ul className={styles.techList}>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Backend</h3>
                <p className={styles.techInfo}>
                  For developing backend services i prefer using golang, postgres / sqlite,
                  docker, nginx.
                  An example is&nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/fetchapp_server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                  &nbsp;Also you can access the API of this example at /api.
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Frontend</h3>
                <p className={styles.techInfo}>
                  For developing web interfaces i use html5/css3 along with react+nextjs.
                  You can look at source code of this website&nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/fetchapp_frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Scripting</h3>
                <p className={styles.techInfo}>
                  I have experience in writing scripts in python or bash.
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Desktop</h3>
                <p className={styles.techInfo}>
                  I have been using c++ for 2 years, mainly qt5 with cmake.
                  You can look at one of my projects&nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/fetchapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                  &nbsp;Besides from Qt5, i have been creating some 2d games.
                  My silly &quot;terraria clone&quot; is&nbsp;
                  <a
                    className={styles.techInfoLink}
                    href="https://github.com/adjsky/terraria_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                  &nbsp;Also i use Linux as my main OS, so i know many aspects of it.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.contactQuoteWrap}>
          <section className={styles.contactCol}>
            <h2 className={styles.title}>Contact me</h2>
            <ul className={styles.contacts}>
              <li className={styles.contactsElement}>
                <h3 className={styles.contactTitle}>Social Media</h3>
                <ul className={styles.contactList}>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://vk.com/wannabe2dxd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      vk
                    </a>
                  </li>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://www.instagram.com/adjskyy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      instagram
                    </a>
                  </li>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://github.com/adjsky"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.contactsElement}>
                <h3 className={styles.contactTitle}>Freelance</h3>
                <ul className={styles.contactList}>
                  <li className={styles.contactListElement}>
                    <a
                      className={styles.contactLink}
                      href="https://www.fiverr.com/users/adjsky"
                      target="_blank"
                      rel="noreferrer"
                    >
                      fiverr
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className={styles.contactInfo}>
              Or you can directly send me an email to&nbsp;
              <span className={styles.contactDirect}>lopr1965@gmail.com</span>
              &nbsp;or a message in telegram to&nbsp;
              <span className={styles.contactDirect}>@adjsky</span>
            </p>
          </section>
          <figure className={styles.quoteFigure}>
            <blockquote className={styles.quote}>
              Be yourself; everyone else is already taken.
            </blockquote>
            <figcaption className={styles.quoteCaption}>
              - Oscar Wilde
            </figcaption>
          </figure>
          <figure className={styles.quoteFigure}>
            <blockquote className={styles.quote}>
              The truth of a thing is in the feel of it, not the think of it.
            </blockquote>
            <figcaption className={styles.quoteCaption}>
              - Stanley Kubrick
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}

export default About
