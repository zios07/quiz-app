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

      let questionFound = false;
      this.result.responses.forEach(resp => {
        if (resp.questionID === question.id) {
          questionFound = true;
          let answerFound = false;
          if (resp.answerIDs) {
            resp.answerIDs.forEach(answerID => {
              if (answerID === answer.id) {
                answerFound = true;
              }
            });
          }
          if (!answerFound) {
            if (resp.answerIDs) {
              resp.answerIDs.push(answer.id);
            } else {
              resp.answerIDs = [answer.id];
            }
          }
        }
      });

      if (!questionFound) {
        const resp = new Resp();
        resp.answerIDs = [answer.id];
        resp.questionID = question.id;
        resp.quizID = this.quiz.id;
        this.result.responses.push(resp);
      }
      //TODO: What about unchecking some answers ?
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
