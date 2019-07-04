package common.server.rest;

import common.server.domain.Quiz;
import common.server.exception.NotFoundException;
import common.server.service.IQuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/quizzes")
public class QuizController {

	@Autowired
	private IQuizService service;
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Quiz> findQuiz(@PathVariable long id) throws NotFoundException {
		Quiz quiz = service.findQuiz(id);
		return new ResponseEntity<>(quiz, HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Quiz>> findAllQuizs() {
		List<Quiz> quizzes = service.findAllQuizzes();
		return new ResponseEntity<>(quizzes, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
		Quiz savedQuiz =  service.addQuiz(quiz);
		return new ResponseEntity<Quiz>(savedQuiz, HttpStatus.CREATED);	
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> deleteQuiz(@PathVariable long id) throws NotFoundException {
		service.deleteQuiz(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping(value = "/search")
	public ResponseEntity<List<Quiz>> searchQuizs(@RequestBody Quiz quizDto) throws NotFoundException {
		List<Quiz> quizzes = service.searchQuizzes(quizDto);
		return new ResponseEntity<>(quizzes, HttpStatus.OK);
	} 
	
	
}
