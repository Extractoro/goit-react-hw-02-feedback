import PropTypes from 'prop-types'
import React, { Component } from 'react'
import s from './Section.module.css'

export class Section extends Component {
  render() {
    const { title, children } = this.props
    return (
      <section className={s['section']}>
        {title && <h2 className={s['title']}>{title}</h2>}
        {children}
      </section>
    )
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}