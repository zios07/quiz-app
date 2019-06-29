import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {


  elements: any = [
    {
      id: 1, heading1: '1',
      heading2: 'Zack',
      heading3: 'Stones',
      heading4: 'zack.stones@gmail.com',
      heading5: '55',
    },
    {
      id: 2, heading1: '2',
      heading2: 'roberto',
      heading3: 'brusy',
      heading4: 'rbsury@gmail.com',
      heading5: '71'
    },
    {
      id: 3, heading1: '3',
      heading2: 'Ahmed',
      heading3: 'Allami',
      heading4: 'aallami@yahoo.fr',
      heading5: '85'
    },
  ];
  headElements = ['ID', 'First Name', 'Last Name', 'Email', 'Quiz result'];



  constructor() { }

  ngOnInit() {
  }

}
