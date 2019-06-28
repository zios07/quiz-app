import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { NavComponent } from './components/common/nav/nav.component';
import { RegisterComponent } from './components/common/register/register.component';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { QuizComponent } from './components/candidat/quiz/quiz.component';
import { ResultComponent } from './components/candidat/result/result.component';
import { ProfileFormComponent } from './components/shared/profile-form/profile-form.component';
import { ProfileViewComponent } from './components/shared/profile-view/profile-view.component';
import { CandidatListComponent } from './components/admin/candidat-list/candidat-list.component';
import { QuestionListComponent } from './components/admin/question-list/question-list.component';
import { QuestionFormComponent } from './components/admin/question-form/question-form.component';
import { QuizListComponent } from './components/admin/quiz-list/quiz-list.component';
import { QuizFormComponent } from './components/admin/quiz-form/quiz-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuizComponent,
    ResultComponent,
    ProfileFormComponent,
    ProfileViewComponent,
    CandidatListComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuizListComponent,
    QuizFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
