import $ from 'jquery';

const fetchQuestions = (product_id, count, page) => {

  return $.ajax({
    url: `/qa/questions?product_id=${product_id}&count=${count}&page=${page}`,
    method: 'GET'
  });

};

const submitQuestion = (question, nickname, email, product_id) => {

  return $.ajax({
    url: `/qa/questions`,
    method: 'POST',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify({
      body: question,
      name: nickname,
      email: email,
      product_id: Number(product_id)
    })
  });

};
const submitAnswer = (answer, nickname, email, question_id) => {

  return $.ajax({
    url: `/qa/questions/${question_id.toString()}/answers`,
    method: 'POST',
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify({
      body: answer,
      name: nickname,
      email: email,
      photos: []
    })
  });

};

const markQuestionHelpful = (question_id) => {
  return $.ajax({
    url: `/qa/questions/${question_id}/helpful`,
    method: 'PUT'
  });
};

const reportQuestion = (question_id) => {
  return $.ajax({
    url: `/qa/questions/${question_id}/report`,
    method: 'PUT'
  });
};

const markAnswerHelpful = (answer_id) => {
  return $.ajax({
    url: `/qa/answers/${answer_id}/helpful`,
    method: 'PUT'
  });
};

const reportAnswer = (answer_id) => {
  return $.ajax({
    url: `/qa/answers/${answer_id}/report`,
    method: 'PUT'
  });
};

export { fetchQuestions, submitQuestion, submitAnswer, markQuestionHelpful, reportQuestion, markAnswerHelpful, reportAnswer };