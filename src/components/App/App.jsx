import React from 'react';
// import propTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  // static propTypes = {}

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodReviews = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralReviews = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badReviews = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div
        style={{
          marginLeft: '20px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'start',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.goodReviews}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
 
