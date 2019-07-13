package common.server.service.impl;

import common.server.domain.Candidat;
import common.server.domain.Question;
import common.server.domain.Quiz;
import common.server.domain.Result;
import common.server.dto.QuizResponse;
import common.server.dto.Response;
import common.server.exception.NotFoundException;
import common.server.repository.QuizRepository;
import common.server.repository.ResultRepository;
import common.server.service.ICandidatService;
import common.server.service.IQuestionService;
import common.server.service.IQuizService;
import common.server.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService implements IQuizService {

    @Autowired
    private IUserService userService;

    @Autowired
    private ICandidatService candidatService;

    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private IQuestionService questionService;

    @Autowired
    private ResultRepository resultRepository;

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
    public Result submitQuiz(QuizResponse quizResponse) throws NotFoundException {
        Result result = new Result();
        Quiz quiz = this.findQuiz(quizResponse.getResponses().stream().findFirst().get().getQuizID());
        int nbQuestions = quiz.getQuestions().size();
        int nbCorrectAnswers = quiz.getQuestions().size();
        int nbWrongAnswers = 0;
        int nbNonAnswered = 0;
        for (Response resp : quizResponse.getResponses()) {
            if (resp.getAnswerIDs() == null || resp.getAnswerIDs().length == 0) {
                nbNonAnswered++;
                continue;
            }
            Question question = questionService.findQuestion(resp.getQuestionID());
            boolean correct = false;
            for (long id : resp.getAnswerIDs()) {
                // The correct answer for each question is the first answer (for now);
                if (question.getAnswers().stream().findFirst().get().getId() == id) {
                    correct = true;
                }
            }
            if (correct) {
                nbCorrectAnswers++;
            } else {
                nbWrongAnswers++;
            }
        }

        float score = (nbCorrectAnswers/nbQuestions) * 100;
        String grade = score > 80 ? "Very good" : score <= 80 && score > 50 ? "Good" : "Bad";
        result.setScore(score);
        result.setGrade(grade);
        result.setNbCorrectAnswers(nbCorrectAnswers);
        result.setNbWrongAnswers(nbWrongAnswers);
        result.setNbNonAnswered(nbNonAnswered);
        result.setCandidat(userService.getConnectedUser());
        result.setQuiz(quiz);
        return resultRepository.save(result);
    }

    @Override
    public Result getResult() {
        return resultRepository.findByCandidatAccountUsername(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
    }
}
