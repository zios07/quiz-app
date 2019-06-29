import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  elements: any = [
    {
      id: 1, heading1: '1',
      heading2: 'Docker Quiz',
      heading4: 'Advanced',
      heading5: '50',
    },
    {
      id: 2, heading1: '2',
      heading2: 'Java Quiz',
      heading4: 'Beginner',
      heading5: '20',
    },
    {
      id: 3, heading1: '3',
      heading2: 'Management Quiz',
      heading4: 'Intermediate',
      heading5: '40',
    },
    {
      id: 4, heading1: '4',
      heading2: 'Java Quiz',
      heading4: 'Intermediate',
      heading5: '44',
    },
  ];
  headElements = ['ID', 'Quiz', 'Level', 'Number of questions'];


  constructor() { }

  ngOnInit() {
  }

}
