const React = require("react")
const PropTypes = require("prop-types")

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
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
    const { opened } = this.state
    if (opened && event.key === "Escape") {
      this.setState({ opened: false })
    }
  }

  handleBgClick(event) {
    const { opened } = this.state
    if (event.target.className === "nav-mobile_bg" && opened) {
      this.setState({ opened: false })
    }
  }

  render() {
    const { children, width } = this.props
    const { opened, buttonHovered } = this.state
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
          style={opened ? {} : {
            display: "none",
          }}
        />
        <div
          className="nav-mobile_menu-wrap"
          style={opened ? openedMenuWrap : closedMenuWrap}
        >
          <div
            className="nav-mobile_button-close"
            onClick={() => this.setState({ opened: false })}
          />
          <div className="nav-mobile_menu">
            { children }
          </div>
        </div>
        <div
          className="nav-mobile_button"
          onClick={() => this.setState({ opened: !opened })}
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
}

module.exports = BurgerMenu
