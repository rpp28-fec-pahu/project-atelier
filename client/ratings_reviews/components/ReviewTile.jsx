import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import helpers from '../helpers.js';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.review.rating,
      name: this.props.review.reviewer_name,
      date: helpers.formatDate(this.props.review.date.slice(0, 10)),
      summary: this.props.review.summary,
      body: this.props.review.body,
      response: this.props.review.response,
      helpfulness: this.props.review.helpfulness,
      showRecommend: this.props.review.recommend,
      showResponse: !(this.props.review.response === null || this.props.review.response.length === 0)
    };
  }

  render() {
    return (
      <div class='review-tile'>
        <div class="stars" style={{'--rating': this.state.rating}}></div>
        <div>{this.state.name}, {this.state.date}</div>
        <div class='review-summary'>{this.state.summary}</div>
        <div class='review-body'>{this.state.body}</div>
        <div class='user-recommend' hidden={!this.state.showRecommend}>I recommend this product!</div>
        <div class='seller-response' hidden={!this.state.showResponse}>Response: {this.state.response}</div>
        <div><span>Helpful? Yes ({this.state.helpfulness}) | Report</span></div>
      </div>
    );
  }
}

export default ReviewTile;