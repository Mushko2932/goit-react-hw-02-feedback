

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div
    style={{
      display: 'flex',
      gap: '20px',
    }}
  >
    <button onClick={onLeaveFeedback}>Good</button>
    <button onClick={onLeaveFeedback}>Neutral</button>
    <button onClick={onLeaveFeedback}>Bad</button>
  </div>
);