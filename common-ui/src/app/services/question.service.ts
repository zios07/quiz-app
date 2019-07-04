import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url = environment.API_URL + '/questions';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(this.url);
  }

  createQuestion(question) {
    return this.http.post(this.url, question);
  }

  updateQuestion(question) {
    return this.http.put(this.url, question);
  }

  deleteQuestion(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
