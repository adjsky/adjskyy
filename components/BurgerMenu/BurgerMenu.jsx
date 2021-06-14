import React from "react"
import PropTypes from "prop-types"
import styles from "./BurgerMenu.module.css"

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)

    const { width } = props
    this.openedMenuWrap = {
      right: 0,
      width,
    }
    this.closedMenuWrap = {
      right: `-${width}`,
      width,
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
    if (event.target.className === styles.bg && isOpen) {
      this.closeMenu(true)
    }
  }

  closeMenu(condition) {
    const { onStateChange } = this.props
    onStateChange({ isOpen: !condition })
  }

  render() {
    const { children, isOpen } = this.props

    return (
      <div>
        <div
          className={styles.bg}
          onClick={this.handleBgClick}
          style={isOpen ? null : {
            display: "none",
          }}
        />
        <div
          className={styles.menuWrap}
          style={isOpen ? this.openedMenuWrap : this.closedMenuWrap}
        >
          <div
            className={styles.closeButton}
            onClick={() => this.closeMenu(true)}
          />
          <div className={styles.menu}>
            { children }
          </div>
        </div>
        <div
          className={styles.openButton}
          onClick={() => this.closeMenu(false)}
        >
          <div className={styles.openButtonBars} />
          <div className={styles.openButtonBars} />
          <div className={styles.openButtonBars} />
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

export default BurgerMenu
