import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './Container.module.css'

export class Container extends Component {
  render() {
      const { children } = this.props;
    return <div className={s['container']}>{children}</div>
  }
}

Container.propTypes = {
  children: PropTypes.node
}