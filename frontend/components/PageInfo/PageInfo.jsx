const React = require("react")
const {
  NavLink,
  Link,
} = require("react-router-dom")
const LogoImg = require("../../assets/logo.svg")
const Routes = require("../../routes.js")
const BurgerMenu = require("../BurgerMenu/BurgerMenu.jsx")
require("./pageInfo.css")

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
      <div className="page-info">
        <div className="page-info_nav-wrap">
          <Link className="page-info_logo" to="/">
            <img src={LogoImg} alt="Home logo" />
          </Link>
          <nav className="nav-desktop">
            {
                Routes.map((route, index) => (
                  <NavLink
                    key={index}
                    to={route.to}
                    className="nav-desktop_link"
                    activeClassName="nav-desktop_link-active"
                    exact={route.exact}
                  >
                    {route.description}
                  </NavLink>
                ))
              }
          </nav>
          <nav className="nav-mobile">
            <BurgerMenu
              isOpen={isMenuOpen}
              onStateChange={(state) => this.setState({ isMenuOpen: state.isOpen })}
            >
              {
                Routes.map((route, index) => (
                  <NavLink
                    className="nav-mobile_link"
                    activeClassName="nav-mobile_link-active"
                    key={index}
                    to={route.to}
                    exact={route.exact}
                    onClick={() => this.setState({ isMenuOpen: false })}
                  >
                    {route.description}
                  </NavLink>
                ))
              }
            </BurgerMenu>
          </nav>
        </div>
      </div>
    )
  }
}

module.exports = PageInfo
