import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'dashboard',
   templateUrl: 'dashboard.component.html',
   styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   constructor() { }
   ngOnInit() { }

   // lineChart
   public lineChartData:Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Petrov'}
   ];
   public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
   public lineChartOptions:any = {
      responsive: true,
      scales: {
         yAxes: [{ ticks: { beginAtZero:true } }] 
      }
   };
   public lineChartColors:Array<any> = [
      { // grey
         backgroundColor: 'rgba(148,159,177,0.2)',
         borderColor: 'rgba(148,159,177,1)',
         pointBackgroundColor: 'rgba(148,159,177,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
   ];
   public lineChartLegend:boolean = true;
   public lineChartType:string = 'line';

   // Doughnut
   public doughnutChartLabels:string[] = ['Safe meils', 'Blocked meils', 'Suspicious content'];
   public doughnutChartData:number[] = [350, 450, 100];
   public doughnutChartType:string = 'doughnut';

   // Pie
   public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
   public pieChartData:number[] = [300, 500, 100];
   public pieChartType:string = 'pie';

   //Bar
   public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
   };
   public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   public barChartType:string = 'bar';
   public barChartLegend:boolean = true;

   public barChartData:any[] = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
   ];

}
