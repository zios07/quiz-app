import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  url = environment.API_URL + '/candidats';

  constructor(private http: HttpClient) { }

  getCandidats() {
    return this.http.get(this.url);
  }

  createCandidat(candidat) {
    return this.http.post(this.url, candidat);
  }

  updateCandidat(candidat) {
    return this.http.put(this.url, candidat);
  }

  deleteCandidat(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
