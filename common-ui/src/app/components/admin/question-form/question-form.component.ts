import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  title = 'Formulaire Question';
  form: FormGroup;
  submitted = false;
  question;
  mode = 'ADD';
  id;
  answers = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // check if we're in edit mode
    this.loadQuestionToEdit();
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      value: [null, Validators.required],
      isMultiple: [null, Validators.required],
      answer: [],
      category: [null]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.question = this.form.value;
    this.question.answers = this.answers;
    let observable;
    if (this.mode === 'ADD') {
      observable = this.questionService.createQuestion(this.question);
    } else if (this.mode === 'EDIT') {
      this.question.id = this.id;
      observable = this.questionService.updateQuestion(this.question);
    }
    observable.subscribe(resp => {
      this.toastr.success('Question enregistrée avec succès');
      this.submitted = false;
    }, error => {
      this.submitted = false;
      const message = error.error ? error.error.message ? error.error.message : 'Erreur inconnue' : 'Erreur inconnue';
      this.toastr.error(message);
    });
  }

  addAnswer() {
    this.answers.push({ value: this.form.value.answer });
    this.form.get('answer').setValue(null);
  }

  removeAnswer(answer) {
    this.answers = this.answers.filter(opt => {
      return opt.value !== answer.value;
    });
  }

  loadQuestionToEdit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.mode = 'EDIT';
      this.questionService.getQuestionById(this.id).subscribe((result: any) => {
        this.fillForm(result);
      }, error => {
        this.toastr.error(String(error));
      });
    }
  }

  fillForm(question) {
    if (question) {
      this.form.get('category').setValue(question.category);
      this.form.get('name').setValue(question.name);
      this.form.get('value').setValue(question.value);
      this.answers = question.answers;
    }
  }

}
