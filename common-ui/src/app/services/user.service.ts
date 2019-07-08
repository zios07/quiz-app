import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.API_URL + '/users';
  candidatUrl: string = environment.API_URL + '/candidats';

  constructor(
    private http: HttpClient
  ) { }

  findByUsername(username: string) {
    return this.http.get(this.url + '/username/' + username);
  }

  updateUser(user: User) {
    return this.http.put(this.url, user);
  }

  getAuthenticatedUser() {
    return this.http.get(this.url + '/authenticated');
  }

  getUsers() {
    return this.http.get(this.url);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }

  save(user: User) {
    return this.http.post(this.url, user);
  }

  findById(id) {
    return this.http.get(this.url + '/' + id);
  }

  getCandidats() {
    return this.http.get(this.candidatUrl);
  }

  saveCandidat(candidat, resume?) {

    const fd = new FormData();
    const blob = new Blob([resume], { type: 'application/json' });
    fd.append('resume', blob, resume.name);
    fd.append('candidat', JSON.stringify(candidat));

    return this.http.post(this.candidatUrl, fd);
  }


  updateCandidat(candidat, resume?) {

    const fd = new FormData();
    const blob = new Blob([resume], { type: 'application/json' });
    fd.append('resume', blob, resume.name);
    fd.append('candidat', JSON.stringify(candidat));

    return this.http.put(this.candidatUrl, fd);

  }

}
