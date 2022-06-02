import React, { Component } from 'react'
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Container from './Container';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  } 

  feedbackHandler = e => {
    const currentBtn = e.target.value
    this.setState(prevStage => {
      return {
        [currentBtn]: prevStage[currentBtn] + 1
      }
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedback() {
    const total = this.countTotalFeedback()
    const { good } = this.state
    if (total) {
      const positiveFeedback = (good / total) * 100
      return Math.round(positiveFeedback)
    }
  }

  render() {
    const { good, neutral, bad } = this.state
    const buttonTypes = Object.keys(this.state)
    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={buttonTypes}
            onLeaveFeedback={this.feedbackHandler}
          />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedback()}
            />
           ) : ( 
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </Container>
    )
  }
}

export default App;