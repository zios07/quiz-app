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


