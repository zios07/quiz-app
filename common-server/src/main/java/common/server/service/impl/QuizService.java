package common.server.service.impl;

import common.server.domain.Quiz;
import common.server.domain.Result;
import common.server.dto.QuizResponse;
import common.server.exception.NotFoundException;
import common.server.repository.QuizRepository;
import common.server.service.IQuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService implements IQuizService {

    @Autowired
    private QuizRepository quizRepository;


    @Override
    public Quiz addQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public Quiz update(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    @Override
    public Quiz findQuiz(long id) {
        return quizRepository.findById(id).get();
    }

    @Override
    public List<Quiz> findAllQuizzes() {
        return quizRepository.findAll();
    }

    @Override
    public void deleteQuiz(long id) throws NotFoundException {
        quizRepository.deleteById(id);
    }

    @Override
    public List<Quiz> searchQuizzes(Quiz quiz) {
        return quizRepository.findAll();
    }

    @Override
    public Quiz getRandomQuiz() {
        return quizRepository.findAll().stream().findAny().get();
    }

    @Override
    public Result submitQuiz(QuizResponse quizResponse) {
        return new Result();
    }
}
