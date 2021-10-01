import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import Routes from "../../routes"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import NavLink from "../NavLink"
import styles from "./PageNav.module.css"

function PageNav(): JSX.Element {
  const [isMenuOpen, setMenuState] = useState(false)
  const { t } = useTranslation(["nav"])

  return (
    <div className={styles.nav}>
      <div className={styles.navWrap}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src="/logo.svg" alt="Home logo" width={90} height={90} />
          </a>
        </Link>
        <nav className={styles.navDesktop}>
          {
            Routes.map((route, index) => (
              <NavLink
                key={index}
                href={route.href}
                activeClassName={styles.activeLink}
              >
                <a className={styles.desktopLink}>{t(route.localName)}</a>
              </NavLink>
            ))
          }
        </nav>
        <nav className={styles.navMobile}>
          <BurgerMenu
            width={300}
            isOpen={isMenuOpen}
            onStateChange={(state) => setMenuState(state.isOpen)}
          >
            {
              Routes.map((route, index) => (
                <Link
                  key={index}
                  href={route.href}
                >
                  <a
                    className={styles.mobileLink}
                    onClick={() => setMenuState(false)}
                  >
                    {t(route.localName)}
                  </a>
                </Link>
              ))
            }
          </BurgerMenu>
        </nav>
      </div>
    </div>
  )
}

export default PageNav
