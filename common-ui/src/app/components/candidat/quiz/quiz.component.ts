import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuizService } from 'src/app/services/quiz.service';

class Resp {
  quizID: number;
  questionID: number;
  answerIDs: number[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz;
  questions = [];
  loading = false;
  result;

  constructor(private quizService: QuizService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getQuiz();
    this.result = {};
    this.result.responses = [];
  }

  getQuiz() {
    this.loading = true;
    this.quizService.getRandomQuiz().subscribe(resp => {
      this.loading = false;
      this.quiz = resp;
    }, error => {
      this.toastr.error('Could not fetch quiz');
      this.loading = false;
    });

  }

  checkChanged($event, question, answer) {
    if ($event.checked) {
      const response = new Resp();
      response.quizID = this.quiz.id;
      response.questionID = question.id;
      if (this.result.responses) {
        let exists = false;
        this.result.responses.forEach(element => {
          element.answerIDs.forEach(id => {
            if (id === answer.id) {
              exists = true;
            }
          });
        });

        if (!exists) {
          response.answerIDs = [answer.id];
        }
      }
      this.result.responses.push(response);
    } else {
      // TODO: When the user unchecks some answer he checked before
    }
  }

  submitQuiz() {
    this.quizService.submitQuiz(this.result).subscribe(resp => {
      this.toastr.success('Termination du quiz');
    }, error => {
      this.toastr.error('Erreur lors de la termination du quiz');
    });

  }

}
