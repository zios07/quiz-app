import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions = [];

  headElements = ['ID', 'Name', 'Value', 'Category'];

  constructor(private questionService: QuestionService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.getQuestions().subscribe((resp: any) => {
      this.questions = resp;
    }, error => {
      this.toastr.error('Erreur inconnue');
    });
  }

  deleteQuestion(id) {
    this.questionService.deleteQuestion(id).subscribe(resp => {
      this.toastr.info('Success de suppression');
      this.ngOnInit();
    }, error => {
      this.toastr.error('Erreur inconnue');
    });
  }
}
