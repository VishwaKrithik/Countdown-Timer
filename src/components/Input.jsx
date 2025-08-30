import React from 'react'
import "./styles/Input.css";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement} & { variant?: "default" | "idk" } props 
 */

const Input = ({children, variant="default", ...rest}) => {
  return (
    <input className={`input input-${variant}`} {...rest}>
      {children}
    </input>
  )
}

export default Input