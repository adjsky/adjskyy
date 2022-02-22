import { useRouter } from "next/router"
import Link from "next/link"
import React, { Children } from "react"

import type { LinkProps } from "next/link"

type TProps = LinkProps & {
  children: React.ReactElement
  activeClassName: string
}

const NavLink = (props: TProps): JSX.Element => {
  const { children, activeClassName } = props
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ""

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default NavLink
