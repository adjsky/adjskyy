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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam eum accusantium, aliquam natus possimus at animi ullam eius ipsam saepe eos omnis recusandae esse unde, delectus, quidem totam quis.
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Frontend</h3>
                <p className={styles.techInfo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus reiciendis autem aliquid earum inventore consequatur dolores non, delectus eligendi iusto fugit incidunt impedit ducimus. Temporibus sapiente cum rem nesciunt.
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Scripting</h3>
                <p className={styles.techInfo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, inventore assumenda. Dolor eaque harum a corrupti maxime impedit deleniti, nihil quidem doloremque, corporis assumenda optio soluta dolorem sapiente architecto. Veniam?
                </p>
              </li>
              <li className={styles.techListElement}>
                <h3 className={styles.techTitle}>Desktop</h3>
                <p className={styles.techInfo}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores officia quia? Ab, ratione quos! Cumque alias atque, assumenda velit voluptate pariatur sit perspiciatis hic et praesentium laudantium nulla amet.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.contactQuoteWrap}>
          <section className={styles.contactCol}>
            <h2 className={styles.title}>Contact me</h2>
            <p className={styles.contactInfo}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus ad corporis eos quo sint minus expedita velit dolor? Optio consequuntur voluptas praesentium quo dolorem ab ea totam sapiente odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora facere quisquam aliquam voluptatem porro facilis, reiciendis atque reprehenderit illum? Ullam quisquam, amet modi quis est possimus? Voluptate, asperiores sequi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo sed minus eum, ut eveniet hic rem officia eius, cumque quae ipsa, reprehenderit est vitae consequatur. Quis ea dolorum consectetur.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eos laudantium animi sequi unde eligendi fuga est tenetur. Aut quas ipsa aspernatur, eius vel provident at quos sed voluptatibus ut?
            </p>
          </section>
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
