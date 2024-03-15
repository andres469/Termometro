import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  thermometerTemperature: number = 0.25; // Initial temperature, can be changed;

  constructor() {}


  changeTemperature(newTemperature: number) {
    this.thermometerTemperature = newTemperature;
  }

}
