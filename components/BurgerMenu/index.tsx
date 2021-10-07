import React from "react"
import styles from "./BurgerMenu.module.css"

type TProps = {
  width: number,
  onStateChange: (state: MenuState) => void,
  children: React.ReactNode,
  isOpen: boolean
}

type MenuState = {
  isOpen: boolean
}

class BurgerMenu extends React.Component<TProps> {
  private readonly openedMenuWrap = {
    right: 0,
    width: 0
  } 

  private readonly closedMenuWrap = {
    right: 0,
    width: 0
  }

  constructor(props: TProps) {
    super(props)

    const { width } = props
    this.openedMenuWrap.width = width
    this.closedMenuWrap.right = -width

    this.handleKeyDownEvent = this.handleKeyDownEvent.bind(this)
    this.handleBgClick = this.handleBgClick.bind(this)
  }

  componentDidMount(): void {
    window.addEventListener("keydown", this.handleKeyDownEvent)
  }

  componentWillUnmount(): void {
    window.removeEventListener("keydown", this.handleKeyDownEvent)
  }

  handleKeyDownEvent(event: KeyboardEvent): void {
    const { isOpen } = this.props
    if (isOpen && event.key === "Escape") {
      this.closeMenu(true)
    }
  }

  handleBgClick(event: React.MouseEvent): void {
    const { isOpen } = this.props
    if ((event.target as HTMLElement).className === styles.bg && isOpen) {
      this.closeMenu(true)
    }
  }

  closeMenu(condition: boolean): void {
    const { onStateChange } = this.props
    onStateChange({ isOpen: !condition })
  }

  render(): JSX.Element {
    const { children, isOpen } = this.props
    const bgStyle: React.CSSProperties = isOpen ? {} : {
      display: "none"
    }

    return (
      <div>
        <div
          className={styles.bg}
          onClick={this.handleBgClick}
          style={bgStyle}
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

export default BurgerMenu