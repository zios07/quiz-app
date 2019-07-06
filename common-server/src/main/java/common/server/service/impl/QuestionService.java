package common.server.service.impl;

import common.server.domain.Question;
import common.server.exception.NotFoundException;
import common.server.repository.QuestionRepository;
import common.server.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService implements IQuestionService {

    @Autowired
    private QuestionRepository questionRepository;


    @Override
    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public Question findQuestion(long id) {
        return questionRepository.findById(id).get();
    }

    @Override
    public List<Question> findAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public void deleteQuestion(long id) throws NotFoundException {
        questionRepository.deleteById(id);
    }

    @Override
    public List<Question> searchQuestions(Question question) {
        return questionRepository.findAll();
    }

    @Override
    public Question updateQuestion(Question question) {
        return questionRepository.save(question);
    }
}
