import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  elements: any = [
    {
      id: 1, heading1: '1',
      heading2: 'What is PaaS',
      heading3: 'Intermediate',
      heading4: '5',
      heading5: 'PaaS is Plateform as service',
    },
    {
      id: 2, heading1: '2',
      heading2: 'What is an object in oop',
      heading3: 'Beginner',
      heading4: '3',
      heading5: 'Object is an instance of a class holding some values',
    },
    {
      id: 3, heading1: '3',
      heading2: 'What is the main advantage of Docker',
      heading3: 'Advanced',
      heading4: '12',
      heading5: 'Build once and run everywhere',
    },
  ];
  headElements = ['ID', 'Question Name', 'Level', 'Answer ID', 'Answer value'];

  constructor() { }

  ngOnInit() {
  }

}
