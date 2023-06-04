import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BMIWebApp';
  height!: number;
  weight!: number;
  bmi!: number;
  bmiCategory!: string;
  Message!: string;
  scales: { label: string }[] = [
    { label: 'Underweight' },
    { label: 'Normal weight' },
    { label: 'Overweight' },
    { label: 'Obese' },
  ];

  constructor() {}

  ngOnInit() {}

  calcBMI() {
    this.height = this.height / 100;
    this.bmi = Math.round(this.weight / (this.height * this.height));
    this.bmiCategory = this.determineBMICategory(this.bmi);
    if (this.bmiCategory === 'Normal weight') {
      this.Message = 'Keep up what you are doing!';
    } else if (this.bmiCategory === 'Underweight') {
      this.Message = 'You are underweight, you should gain some weight';
    } else if (this.bmiCategory === 'Overweight') {
      this.Message = 'You are overweight, you should lose some weight';
    } else {
      this.Message = 'You are obese,You should contact your doctor!';
    }
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

  calculateIndicatorPosition(): number {
    if (this.bmiCategory === 'Underweight') {
      return 0;
    } else if (this.bmiCategory === 'Normal weight') {
      return 33;
    } else if (this.bmiCategory === 'Overweight') {
      return 66;
    } else {
      return 100;
    }
  }
}
