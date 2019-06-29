import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {


  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [800, 50, 20], label: 'My First dataset' }
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
