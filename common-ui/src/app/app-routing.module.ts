import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatListComponent } from './components/admin/candidat-list/candidat-list.component';
import { QuestionFormComponent } from './components/admin/question-form/question-form.component';
import { QuestionListComponent } from './components/admin/question-list/question-list.component';
import { QuizFormComponent } from './components/admin/quiz-form/quiz-form.component';
import { QuizListComponent } from './components/admin/quiz-list/quiz-list.component';
import { QuizComponent } from './components/candidat/quiz/quiz.component';
import { ResultComponent } from './components/candidat/result/result.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { RegisterComponent } from './components/common/register/register.component';
import { ProfileFormComponent } from './components/shared/profile-form/profile-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/form/:id', component: QuizFormComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'question/form/:id', component: QuestionFormComponent },
  { path: 'result', component: ResultComponent },
  { path: 'candidats', component: CandidatListComponent },
  { path: 'candidat/form/:id', component: ProfileFormComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
