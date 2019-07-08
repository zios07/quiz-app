import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {

  headElements = ['ID', 'First Name', 'Last Name', 'Email', 'Quiz result'];

  candidats = [];

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loadCandidats();
  }

  loadCandidats() {
    this.userService.getCandidats().subscribe((resp: any) => {
      this.candidats = resp;
    }, error => {
      this.toastr.error('Erreur inconnue');
    });
  }


  deleteCandidat(id) {
    this.userService.delete(id).subscribe(resp => {
      this.toastr.info('Success de suppression');
      this.ngOnInit();
    }, error => {
      this.toastr.error('Erreur inconnue');
    });
  }

}
