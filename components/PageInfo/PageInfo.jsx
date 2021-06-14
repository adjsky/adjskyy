import React from "react"
import Link from "next/link"
import Image from "next/image"
import Routes from "../../routes.js"
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx"
import NavLink from "../NavLink.jsx"
import styles from "./PageInfo.module.css"

class PageInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <div className={styles.info}>
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
                  <a className={styles.desktopLink}>{route.description}</a>
                </NavLink>
              ))
            }
          </nav>
          <nav className={styles.navMobile}>
            <BurgerMenu
              isOpen={isMenuOpen}
              onStateChange={(state) => this.setState({ isMenuOpen: state.isOpen })}
            >
              {
                Routes.map((route, index) => (
                  <Link
                    key={index}
                    href={route.href}
                  >
                    <a
                      className={styles.mobileLink}
                      onClick={() => this.setState({ isMenuOpen: false })}
                    >
                      {route.description}
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
}

export default PageInfo
