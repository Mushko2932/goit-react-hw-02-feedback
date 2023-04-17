import React from 'react';

export class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  goodReviews = () => {}
  neutralReviews = () => {}
  badReviews = () => {}

  countTotalFeedback = () => {}
  countPositiveFeedbackPercentage = () => {}
  
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
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <button onClick={this.goodReviews}>Good</button>
          <button onDoubleClick={this.neutralReviews}>Neutral</button>
          <button onClick={this.badReviews}>Bad</button>
        </div>
        <div
          style={{
            fontWeight: '500',
          }}
        >
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total:</p>
          <p>Positive feedback:</p>
        </div>
      </div>
    );
  };
};
