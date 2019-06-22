import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/Account';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'Sign up';
  form: FormGroup;
  submitted = false;
  user: User = new User();

  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      bDate: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.submitted = true;
    const user = this.form.value;
    user.account = new Account(this.form.value.username, this.form.value.password);
    user.role = new Role(this.form.value.role);
    this.authService.register(user).pipe(delay(1500)).subscribe(resp => {
      this.authService.setConnectedUser(resp);
      this.router.navigate(['/']);
      this.toastr.success('Registered successfully');
    }, error => {
      this.submitted = false;
      const message = error.error ? error.error.message ? error.error.message : 'Error occured' : 'Error occured';
      this.toastr.error(message);
    });
  }

}
