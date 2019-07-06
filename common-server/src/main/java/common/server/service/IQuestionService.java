package common.server.service;

import common.server.domain.Question;
import common.server.exception.NotFoundException;

import java.util.List;

public interface IQuestionService {

	Question addQuestion(Question question);

	Question findQuestion(long id) throws NotFoundException;

	List<Question> findAllQuestions();

	void deleteQuestion(long id) throws NotFoundException;

	List<Question> searchQuestions(Question question);

    Question updateQuestion(Question question);
}
