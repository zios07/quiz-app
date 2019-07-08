import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  title = 'Formulaire Candidat';
  form: FormGroup;
  submitted = false;
  questionList = [];
  skills = [{ id: 1, label: 'Java' }, { id: 1, label: 'Angular' }, { id: 1, label: 'Scrum' },
  { id: 1, label: 'Android' }, { id: 1, label: 'Management' }, { id: 1, label: 'DevOps' }];
  candidat;
  resume;
  mode = 'ADD';
  id;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private candidatService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // check if we're in edit mode
    this.loadCandidatToEdit();
    const formControls = this.skills.map(control => new FormControl(false));

    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      post: [null, Validators.required],
      skills: new FormArray(formControls)
    });
  }

  selectFile(event) {
    this.resume = event.target.files[0];
  }

  onSubmit() {
    const selectedSkills = this.form.value.skills
      .map((checked, index) => checked ? this.skills[index].label : null)
      .filter(value => value !== null);

    this.submitted = true;
    this.candidat = this.form.value;
    this.candidat.account = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.candidat.skills = selectedSkills.join();
    let observable;
    if (this.mode === 'ADD') {
      observable = this.candidatService.saveCandidat(this.candidat, this.resume);
    } else if (this.mode === 'EDIT') {
      this.candidat.id = this.id;
      observable = this.candidatService.updateCandidat(this.candidat, this.resume);
    }
    observable.subscribe(resp => {
      this.toastr.success('Candidat enregistré avec succès');
      this.submitted = false;
    }, error => {
      this.submitted = false;
      const message = error.error ? error.error.message ? error.error.message : 'Erreur inconnue' : 'Erreur inconnue';
      this.toastr.error(message);
    });
  }

  removeCandidat(id) {
    this.candidatService.delete(id).subscribe(resp => {
      this.toastr.info('Success de suppression');
      this.ngOnInit();
    }, error => {
      this.toastr.error('Erreur inconnue');
    })
  }


  loadCandidatToEdit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.mode = 'EDIT';
      this.candidatService.findById(this.id).subscribe((result: any) => {
        this.fillForm(result);
      }, error => {
        this.toastr.error(String(error));
      });
    }
  }

  fillForm(candidat) {
    if (candidat) {
      this.form.get('firstName').setValue(candidat.firstName);
      this.form.get('lastName').setValue(candidat.lastName);
      this.form.get('post').setValue(candidat.post);
    }
  }
}
