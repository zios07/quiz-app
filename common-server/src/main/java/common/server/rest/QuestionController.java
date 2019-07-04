package common.server.rest;

import common.server.domain.Question;
import common.server.exception.NotFoundException;
import common.server.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/questions")
public class QuestionController {

	@Autowired
	private IQuestionService service;
	
	@GetMapping(value = "{id}")
	public ResponseEntity<Question> findQuestion(@PathVariable long id) throws NotFoundException {
		Question question = service.findQuestion(id);
		return new ResponseEntity<>(question, HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Question>> findAllQuestions() {
		List<Question> questions = service.findAllQuestions();
		return new ResponseEntity<>(questions, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
		Question savedQuestion =  service.addQuestion(question);
		return new ResponseEntity<Question>(savedQuestion, HttpStatus.CREATED);	
	}
	
	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> deleteQuestion(@PathVariable long id) throws NotFoundException {
		service.deleteQuestion(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping(value = "/search")
	public ResponseEntity<List<Question>> searchQuestions(@RequestBody Question questionDto) throws NotFoundException {
		List<Question> questions = service.searchQuestions(questionDto);
		return new ResponseEntity<>(questions, HttpStatus.OK);
	} 
	
	
}
