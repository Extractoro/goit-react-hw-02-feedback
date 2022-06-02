import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s['list']}>
    {options.map(option => (
      <li key={option} className={s['item']}>
        <button
          className={s['button']}
          value={option}
          type="button"
          onClick={onLeaveFeedback}
          >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;