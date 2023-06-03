import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BMIWebApp';
  name: string = '';
  height!: number;
  weight!: number;
  bmi!: number;
  bmiCategory!: string;

  constructor() {

  }

  ngOnInit() {

  }

  calcBMI() {
    this.height = this.height / 100;
    this.bmi = Math.round(this.weight / (this.height * this.height));
    this.bmiCategory = this.determineBMICategory(this.bmi);
  }

  determineBMICategory(bmi: number): string {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
}
