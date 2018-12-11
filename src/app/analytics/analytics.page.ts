import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {

  data = [
    {
      "name": "Sales",
      "value": 800
    },
    {
      "name": "Views",
      "value": 1000
    }
  ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  // xAxisLabel = 'Item';
  showYAxisLabel = true;
  yAxisLabel = '';
  view = [320];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

}
