import React from 'react';
import Answer from './Answer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      remainingAnswers: [],
      showAnswersList: false,
      showLoadMoreAnswersButton: false,
      showCollapseAnswersListButton: false
    };

    this.collapseAnswersList = this.collapseAnswersList.bind(this);
    this.loadRemainingAnswers = this.loadRemainingAnswers.bind(this);
  }

  componentDidMount() {
    let firstTwoAnswers = Object.values(this.props.answers).slice(0, 2);
    let remainingAnswers = Object.values(this.props.answers).slice(2);
    if (!!firstTwoAnswers.length) {
      this.setState({
        answers: firstTwoAnswers,
        showAnswersList: true
      });
    }
    if (!!remainingAnswers.length) {
      this.setState({
        remainingAnswers: remainingAnswers,
        showLoadMoreAnswersButton: true
      });
    }
  }

  collapseAnswersList() {
    this.setState({
      remainingAnswers: this.state.answers.slice(2),
      answers: this.state.answers.slice(0, 2),
      showLoadMoreAnswersButton: true,
      showCollapseAnswersListButton: false
    });

  }

  loadRemainingAnswers() {
    this.setState({
      answers: this.state.answers.concat(this.state.remainingAnswers),
      remainingAnswers: [],
      showLoadMoreAnswersButton: false,
      showCollapseAnswersListButton: true
    });
  }

  render() {

    return (
      this.state.showAnswersList &&
      <div className="answers-list container">
        <b>A:</b>
        {this.state.answers.map((answer) => <Answer key={answer.id} answer={answer} />)}
        {this.state.showLoadMoreAnswersButton && <button onClick={this.loadRemainingAnswers}> LOAD MORE ANSWERS </button>}
        {this.state.showCollapseAnswersListButton && <button onClick={this.collapseAnswersList}> Collapse List </button>}
      </div>

    );
  }
}

export default AnswersList;