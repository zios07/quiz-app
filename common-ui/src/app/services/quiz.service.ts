import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url = environment.API_URL + '/quizzes';

  constructor(private http: HttpClient) { }

  getQuizzes() {
    return this.http.get(this.url);
  }

  createQuiz(quiz) {
    return this.http.post(this.url, quiz);
  }

  updateQuiz(quiz) {
    return this.http.put(this.url, quiz);
  }

  deleteQuiz(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
