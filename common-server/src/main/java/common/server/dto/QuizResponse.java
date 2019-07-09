package common.server.dto;

import java.util.List;

public class QuizResponse {

    List<Response> responses;

    public QuizResponse() {
    }

    public QuizResponse(List<Response> responses) {
        this.responses = responses;
    }

    public List<Response> getResponses() {
        return responses;
    }

    public void setResponses(List<Response> responses) {
        this.responses = responses;
    }
}

class Response {

    private long quizID;

    private long questionID;

    private Long[] answerIDs;

    public Response() {

    }

    public Response(long quizID, long questionID, Long[] answerIDs) {
        this.quizID = quizID;
        this.questionID = questionID;
        this.answerIDs = answerIDs;
    }

    public long getQuizID() {
        return quizID;
    }

    public void setQuizID(long quizID) {
        this.quizID = quizID;
    }

    public long getQuestionID() {
        return questionID;
    }

    public void setQuestionID(long questionID) {
        this.questionID = questionID;
    }

    public Long[] getAnswerIDs() {
        return answerIDs;
    }

    public void setAnswerIDs(Long[] answerIDs) {
        this.answerIDs = answerIDs;
    }
}
