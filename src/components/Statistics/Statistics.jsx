import PropTypes from 'prop-types'
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={s['list']}>
        <li className={s['item']}>
          <p><b>Good:</b> {good}</p>
        </li>
        <li className={s['item']}>
          <p><b>Neutral:</b> {neutral}</p>
        </li>
        <li className={s['item']}>
          <p><b>Bad:</b> {bad}</p>
        </li>
        <li className={s['item']}>
          <p><b>Total:</b> {total}</p>
        </li>
        <li className={s['item']}>
          <p><b>Possitive feedback:</b> <span>{positiveFeedback}%</span></p>
        </li>
      </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired
}

export default Statistics