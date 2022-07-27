import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import NotificationMessage from './NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (key) => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  }

  countTotalFeedback = () => {
    let states = Object.values(this.state);
    let total = states.reduce((total, state) => total + state, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let positive = this.state.good;
    let percentage = Math.ceil((positive / total) * 100);
    if (total === 0) {
      return total;
    }
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    let total = this.countTotalFeedback();
    let percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <NotificationMessage message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </>
    );
  }
}
