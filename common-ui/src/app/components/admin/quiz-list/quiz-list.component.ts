import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { ToastrService } from 'ngx-toastr';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  headElements = ['ID', 'Quiz libelle', 'Niveau'];

  quizzes = [];

  constructor(private quizService: QuizService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe((resp: any) => {
      this.quizzes = resp;
    }, error => {
      this.toastr.error('Erreur inconnue');
    });
  }


  removeQuiz(id) {
    this.quizService.deleteQuiz(id).subscribe(resp => {
      this.toastr.info('Success de suppression');
      this.ngOnInit();
    }, error => {
      this.toastr.error('Erreur inconnue');
    });
  }
}
