import React from "react";

const MainContent = () => {
    return (
      <div className="main-content">
        <div className="question">
          <button className="back-button">Back to Questions</button>
          <div className="question-details">
            <div className="tags">
              <span className="tag">Design</span>
              <span className="tag">Technology</span>
            </div>
            <h2>
              A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet sit scelerisque ultrices magna cursus se?</p>
            <div className="question-stats">
              <span>100 Views</span>
              <span>How should you word your answer?</span>
            </div>
          </div>
        </div>
        <div className="answers">
          <h3>Answers (23)</h3>
          <div className="answer">
            <div className="answer-header">
              <span className="author">Neha Bhat (You)</span>
              <span className="date">Jun 27, 2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Elit et et ut vestibulum ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum.</p>
            <button className="edit-button">Edit</button>
            <button className="like-button">Like</button>
            <input type="text" placeholder="Add a comment..." />
            <button className="post-button">Post</button>
          </div>
        </div>
      </div>
    );
  };
  export default MainContent;