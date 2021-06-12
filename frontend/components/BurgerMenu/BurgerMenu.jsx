const React = require("react")
const PropTypes = require("prop-types")

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonHovered: false,
    }

    this.handleKeyDownEvent = this.handleKeyDownEvent.bind(this)
    this.handleBgClick = this.handleBgClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDownEvent)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDownEvent)
  }

  handleKeyDownEvent(event) {
    const { isOpen } = this.props
    if (isOpen && event.key === "Escape") {
      this.closeMenu(true)
    }
  }

  handleBgClick(event) {
    const { isOpen } = this.props
    if (event.target.className === "nav-mobile_bg" && isOpen) {
      this.closeMenu(true)
    }
  }

  closeMenu(condition) {
    const { onStateChange } = this.props
    onStateChange({ isOpen: !condition })
  }

  render() {
    const { children, width, isOpen } = this.props
    const { buttonHovered } = this.state
    const openedMenuWrap = {
      right: 0,
      width,
    }
    const closedMenuWrap = {
      right: `-${width}`,
      width,
    }

    return (
      <div>
        <div
          className="nav-mobile_bg"
          onClick={this.handleBgClick}
          style={isOpen ? {} : {
            display: "none",
          }}
        />
        <div
          className="nav-mobile_menu-wrap"
          style={isOpen ? openedMenuWrap : closedMenuWrap}
        >
          <div
            className="nav-mobile_button-close"
            onClick={() => this.closeMenu(true)}
          />
          <div className="nav-mobile_menu">
            { children }
          </div>
        </div>
        <div
          className="nav-mobile_button"
          onClick={() => this.closeMenu(false)}
          onMouseOver={() => this.setState({ buttonHovered: true })}
          onFocus={() => this.setState({ buttonHovered: true })}
          onMouseOut={() => this.setState({ buttonHovered: false })}
          onBlur={() => this.setState({ buttonHovered: false })}
        >
          {[...Array(3)].map((_, index) => (
            <div key={index} className={`nav-mobile_button-bars ${buttonHovered ? "hover" : ""}`} />
          ))}
        </div>
      </div>
    )
  }
}

BurgerMenu.defaultProps = {
  width: "300px",
}

BurgerMenu.propTypes = {
  width: PropTypes.string,
  onStateChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

module.exports = BurgerMenu
