import React from 'react'
import "./styles/Button.css"

/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} & { variant?: "default" | "toggle" | "pause" } props
 */

const Button = ({ children, variant="default", ...rest }) => {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button