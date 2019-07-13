import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result;
  loading;
  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [];

  public chartLabels: Array<any> = ['Correct answers', 'Wrong answers', 'Non answered'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['green', 'red', 'gray'],
      hoverBackgroundColor: ['#3CB371', '#F08080', '#D3D3D3'],
      borderWidth: 2,
    }
  ];


  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getMyResult();
  }

  getMyResult() {
    this.loading = true;
    this.quizService.getResult().subscribe(resp => {
      this.result = resp;
      this.chartDatasets = [
        { data: [this.result.nbCorrectAnswers, this.result.nbWrongAnswers, this.result.nbNonAnswered], label: 'My First dataset' }
      ];
      this.loading = false;
    });
  }

}
