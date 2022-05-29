import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button } from './Button'
import s from './FeedbackOptions.module.css'

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props
    return (
      <ul className={s['list']}>
        {options.map(buttonType => {
          return (
            <li key={buttonType} className={s['item']}>
              <Button onClick={onLeaveFeedback} value={buttonType}>
                {buttonType}
              </Button>
            </li>
          )
        })}
      </ul>
    )
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}