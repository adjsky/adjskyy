import React from "react"
import Image from "next/image"
import styles from "./About.module.css"

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.flexCol}>
        <section className={styles.firstCol}>
          <h2 className={styles.title}>About me</h2>
          <Image src="/about_pic5.jpg" width={640} height={427} layout="responsive" quality={100} />
          <p className={styles.firstColParagraph}>
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
        <section className={styles.secondCol}>
          <h2 className={styles.title}>Tech stack</h2>
        </section>
      </div>
      <section className={styles.thirdCol}>asd</section>
    </div>
  )
}

export default About
