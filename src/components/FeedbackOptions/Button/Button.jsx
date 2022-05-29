import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s from './Button.module.css'

export class Button extends Component {
render() {
  const {
    onClick,
    children,
    value = 'neutral',
    ...restProps
  } = this.props
  
    return (
      <button
        {...restProps}
        className={s['button']}
        value={value}
        onClick={onClick}
      >{children}</button>
    ) 
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOf(['good', 'neutral', 'bad'])
}