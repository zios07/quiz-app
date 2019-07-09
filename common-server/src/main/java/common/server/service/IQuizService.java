package common.server.service;

import common.server.domain.Quiz;
import common.server.domain.Result;
import common.server.dto.QuizResponse;
import common.server.exception.NotFoundException;

import java.util.List;

public interface IQuizService {

	Quiz addQuiz(Quiz quiz);

	Quiz update(Quiz quiz);

	Quiz findQuiz(long id) throws NotFoundException;

	List<Quiz> findAllQuizzes();

	void deleteQuiz(long id) throws NotFoundException;

	List<Quiz> searchQuizzes(Quiz quiz);

    Quiz getRandomQuiz();

    Result submitQuiz(QuizResponse quizResponse);
}
