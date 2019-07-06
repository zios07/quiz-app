import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  title = 'Formulaire Quiz';
  form: FormGroup;
  submitted = false;
  questionList = [];
  quiz;
  mode = 'ADD';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private quizService: QuizService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // check if we're in edit mode
    this.loadQuizToEdit();
    this.loadQuestions();
    this.form = this.formBuilder.group({
      label: [null, Validators.required],
      level: [null, Validators.required],
      questions: [null, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.quiz = this.form.value;
    let observable;
    if (this.mode === 'ADD') {
      observable = this.quizService.createQuiz(this.quiz);
    } else if (this.mode === 'EDIT') {
      observable = this.quizService.updateQuiz(this.quiz);
    }
    observable.subscribe(resp => {
      this.toastr.success('Quiz enregistré avec succès');
      this.submitted = false;
    }, error => {
      this.submitted = false;
      const message = error.error ? error.error.message ? error.error.message : 'Erreur inconnue' : 'Erreur inconnue';
      this.toastr.error(message);
    });
  }

  removeQuiz(id) {
    this.quizService.deleteQuiz(id).subscribe(resp => {
      this.toastr.info('Success de suppression');
      this.ngOnInit();
    }, error => {
      this.toastr.error('Erreur inconnue');
    })
  }

  loadQuestions() {
    this.questionService.getQuestions().subscribe((resp: any) => {
      this.questionList = resp;
    });
  }

  loadQuizToEdit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mode = 'EDIT';
      this.quizService.getQuizById(id).subscribe((result: any) => {
        this.fillForm(result);
      }, error => {
        this.toastr.error(String(error));
      });
    }
  }

  fillForm(quiz) {
    if (quiz) {
      this.form.get('label').setValue(quiz.label);
      this.form.get('level').setValue(quiz.level);
      this.form.get('questions').setValue(quiz.questions);
    }
  }
}
